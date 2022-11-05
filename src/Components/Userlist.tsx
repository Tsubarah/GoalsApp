import ListItem from "./ListItem"

type listProps = {
  show: boolean,
  setShow: (show: boolean) => void,
}
const UserList = ({show, setShow}: listProps)  => {
  return (
    <div className="user-list-wrapper">
      <ul className="user-list">
        <li className="listItem">
          <ListItem setShow={setShow} show={show} />
        </li>
        <li className="listItem">
          <ListItem setShow={setShow} show={show}/>
        </li>
        <li className="listItem">
          <ListItem  setShow={setShow} show={show}/>
        </li>
      </ul>
    </div>
  )
}

export default UserList