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
  const { setTargetedUser, currentUser, accessToken } = useAuthContext()
  const { getUsersPhotoUrl } = useUsers()
  const [updatedUser, setUpdatedUser] = useState<IUser>()
  // const [ consultant, setConsultant ] = useState<IUser>()

  useEffect(() => {
    if (!currentUser) {
        return;
      }
      // async function getImages(accessToken: string) {
      //   user.imageUrl = await getUsersPhotoUrl(accessToken, user.id)
        
      //   setConsultant(user)
      //   console.log('user', user)
      // }
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
      <button onClick={() => {
        setShow(!show)
        setTargetedUser(user)
      }}
      >
      <img src={updatedUser?.imageUrl ? updatedUser.imageUrl : placeholder} alt="" />
      <h3>{user?.displayName}</h3>
      </button>
    </li>
  )
}

export default ListItem