import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from '../typings/User'
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useEffect, useState } from 'react'
import useUsers from "../services/useUsers";
// import useLocalStorage from '../Hooks/useLocalStorage'

type itemProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
  user: IUser
}

const ListItem = ({show, setShow, user}: itemProps) => {
  const { setTargetedUser, currentUser } = useAuthContext()
  const { getUsersPhotoUrl } = useUsers()
  const [updatedUser, setUpdatedUser] = useState<IUser>(user)

  const update = () => {
    setShow(!show)
    window.localStorage.setItem('target', JSON.stringify(user))
    setTargetedUser(updatedUser)
  }

  useEffect(() => {
    if (!currentUser) {
        return;
      }

      getUsersPhotoUrl(currentUser.token, user.id).then(imageUrl => {
        if (imageUrl) {
          setUpdatedUser({
            ...user, imageUrl: imageUrl
          })
        }
      })
      
    },[])

  return (
    <li className="item">
      <button onClick={() => update()}
      >
      <img src={updatedUser?.imageUrl ? updatedUser.imageUrl : placeholder} alt="" />
      <h3>{updatedUser?.displayName}</h3>
      </button>
    </li>
  )
}

export default ListItem