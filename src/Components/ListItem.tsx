import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from '../typings/Userinterface'
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useEffect, useState } from 'react'
import useUsers from "../services/useUsers";

type itemProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
  user: IUser
}

const ListItem = ({show, setShow, user}: itemProps) => {
  const { currentUser } = useAuthContext()
  const { getUsersPhotoUrl } = useUsers()
  const [target, setTarget] = useState<IUser>(user)

  const update = () => {
    setShow(!show)
    window.localStorage.setItem('target', JSON.stringify(user))
  }
  
  useEffect(() => {
    if (!currentUser) {
        return;
      }

      getUsersPhotoUrl(currentUser.token, user.id).then(imageUrl => {
        if (imageUrl) {
          setTarget({
            ...user, imageUrl: imageUrl
          })
        }
      })  
  },[])

  return (
    <li className="item">
      <button onClick={() => update()}>
      <img src={target?.imageUrl ? target.imageUrl : placeholder} alt="" />
      <h3>{target?.displayName}</h3>
      </button>
    </li>
  )
}

export default ListItem