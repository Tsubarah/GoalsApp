import image from "../Assets/Images/placeholder-image.jpeg"
import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from '../typings/User'

type itemProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
  user: IUser
}

const ListItem = ({show, setShow, user}: itemProps) => {
  const { setTargetedUser } = useAuthContext()
    
  return (
    <li className="item">
      <button onClick={() => {
        setShow(!show)
        setTargetedUser(user)
      }}
      >
      <img src={image} alt="" />
      <h3>{user.displayName}</h3>
      </button>
    </li>
  )
}

export default ListItem