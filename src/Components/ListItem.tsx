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
  const [ consultant, setConsultant ] = useState<IUser>()

  useEffect(() => {
    if (!currentUser) {
        return;
      }
      async function getImages(accessToken: string) {
        user.imageUrl = await getUsersPhotoUrl(accessToken, user.id)
        
        setConsultant(user)
        console.log('user', user)
      }
      getImages(currentUser.token)
    },[])

  return (
    <li className="item">
      <button onClick={() => {
        setShow(!show)
        setTargetedUser(user)
      }}
      >
      <img src={user.imageUrl ? user.imageUrl : placeholder} alt="" />
      <h3>{user?.displayName}</h3>
      </button>
    </li>
  )
}

export default ListItem

function getUsers(accessToken: string | undefined) {
  throw new Error("Function not implemented.");
}
