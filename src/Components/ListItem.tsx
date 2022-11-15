import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from '../typings/User'
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useEffect, useState } from 'react'
import useUsers from "../services/useUsers";

type itemProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
  user: IUser
}

const ListItem = ({show, setShow, user}: itemProps) => {
  const { setTargetedUser, accessToken } = useAuthContext()
  const { getUsersPhotoUrl } = useUsers()
  const [ consultant, setConsultant ] = useState<IUser>()

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
      <button onClick={() => {
        setShow(!show)
        setTargetedUser(user)
      }}
      >
      <img src={user.imageUrl ? user.imageUrl : placeholder} alt="" />
      <h3>{user.displayName}</h3>
      </button>
    </li>
  )
}

export default ListItem