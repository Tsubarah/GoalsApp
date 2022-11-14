import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from '../typings/User'
import placeholder from '../Assets/Images/placeholder-image.jpeg'

type itemProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
  user: IUser
}

const ListItem = ({show, setShow, user}: itemProps) => {
  const { setTargetedUser } = useAuthContext()
    
  let url = `https://graph.microsoft.com/v1.0/users/${user.id}/photo/$value`
  console.log('user', user)
  // let url = user.imageUrl

  return (
    <li className="item">
      <button onClick={() => {
        setShow(!show)
        setTargetedUser(user)
      }}
      >
      <img src={url !== "" ? url : placeholder} alt="" />
      <h3>{user.displayName}</h3>
      </button>
      </li>
  )
}

export default ListItem