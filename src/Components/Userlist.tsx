import ListItem from "./ListItem"

const UserList = () => {
  return (
      <ul className="user-list">
        <li className="listItem">
          <ListItem />
        </li>
        <li className="listItem">
          <ListItem />
        </li>
        <li className="listItem">
          <ListItem />
        </li>
      </ul>
  )
}

export default UserList