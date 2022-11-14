import { IUser } from '../typings/User'
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useAuthContext } from '../Contexts/AuthContext'

type itemProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
  user: IUser
}

const ListItem = ({show, setShow, user}: itemProps) => {
  const { setTargetedUser } = useAuthContext()
    
//   let url = `https://graph.microsoft.com/v1.0/users/${user.id}/photo/$value`
  // let url = user.imageUrl

    console.log('user.imageUrl', user.imageUrl)

  console.log('users', user)
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