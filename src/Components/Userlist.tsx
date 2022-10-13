import ListItem from "./ListItem"
import "./Userlist.css"

const UserList = () => {
  return (
      <ul className="user-list">
        <li>
          <ListItem />
        </li>
        <li>
          <ListItem />
        </li>
        <li>
          <ListItem />
        </li>
      </ul>
  )
}

export default UserList