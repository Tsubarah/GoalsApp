import ListItem from "./ListItem"

type listProps = {
  show: boolean | null,
  setShow: (show: boolean | null) => void,
}
const UserList = ({show, setShow}: listProps)  => {
  return (
    <div className="user-list-wrapper">
      <ul className="user-list">
        <ListItem setShow={setShow} show={show} />
        <ListItem setShow={setShow} show={show}/>
        <ListItem  setShow={setShow} show={show}/>
      </ul>
    </div>
  )
}

export default UserList