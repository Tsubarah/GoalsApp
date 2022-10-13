import image from "../Assets/Images/placeholder-image.jpeg"
import "./Userlist.css"

const UserList = () => {
  return (
      <ul className="user-list">
        <li className="user-list-item">
          <img src={image} alt="" />
          <p>John Doe</p>
        </li>
        <li className="user-list-item">
          <img src={image} alt="" />
          <p>John Doe</p>
        </li>
        <li className="user-list-item">
          <img src={image} alt="" />
          <p>John Doe</p>
        </li>
      </ul>
  )
}

export default UserList