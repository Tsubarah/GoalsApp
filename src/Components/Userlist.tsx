import ListItem from "./ListItem"
import { useAuthContext } from "../Contexts/AuthContext";

type listProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
}

const UserList = ({show, setShow}: listProps)  => {
  const { users } = useAuthContext()
    
  return (
    <div className="user-list-wrapper">
			{users && (
				<ul className="user-list">
					{users.map((user, i) => (
						<ListItem key={i} setShow={setShow} show={show} user={user} />
					))}
      	</ul>
			)}
    </div>
  )
}

export default UserList