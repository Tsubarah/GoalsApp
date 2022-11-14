import { IUser } from '../typings/User'
import placeholder from '../Assets/Images/placeholder-image.jpeg'

type itemProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
  user: IUser
}

const ListItem = ({show, setShow, user}: itemProps) => {

    let url = `https://graph.microsoft.com/v1.0/users/${user.id}/photo/$value`
    // let url = user.imageUrl
    // console.log('url', user.imageUrl)
    
  return (
    <li className="item">
        <button onClick={() => setShow(!show)}>
        <img src={url}  alt="" />
        <h3>{user.displayName}</h3>
        </button>
    </li>
  )
}

export default ListItem