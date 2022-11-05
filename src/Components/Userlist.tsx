import ListItem from "./ListItem"

type listProps = {
  show: boolean,
  setShow: (show: boolean) => void,
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