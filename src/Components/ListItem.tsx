import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from '../typings/User'
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useEffect, useState } from 'react'
import useUsers from "../services/useUsers";
import useLocalStorage from '../Hooks/useLocalStorage'

type itemProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
  user: IUser
}

const ListItem = ({show, setShow, user}: itemProps) => {
  const { accessToken } = useAuthContext()
  const { getUsersPhotoUrl } = useUsers()
  const [ consultant, setConsultant ] = useState<IUser>()
//   const [ target, setTarget ] = useLocalStorage('bengt', '')

  const update = () => {
    setShow(!show)
    window.localStorage.setItem('target', JSON.stringify(user))
      
  }

  useEffect(() => {
    if (!accessToken) {
        return;
      }
      async function addImage(accessToken: string) {
        user.imageUrl = await getUsersPhotoUrl(accessToken, user.id)
        setConsultant(user)
      }
      addImage(accessToken)
    },[accessToken])

  return (
    <li className="item">
      <button onClick={() => update()}
      >
      <img src={consultant?.imageUrl ? user.imageUrl : placeholder} alt="" />
      <h3>{consultant?.displayName}</h3>
      </button>
    </li>
  )
}

export default ListItem