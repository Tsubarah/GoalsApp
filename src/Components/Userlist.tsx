import ListItem from "./ListItem"
import { useAuthContext } from "../Contexts/AuthContext";
import { IUser } from "../typings/Userinterface";

type listProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
  setUserFromUserlist: (user: IUser) => void,
}

const UserList = ({show, setShow, setUserFromUserlist}: listProps)  => {
  const { users } = useAuthContext()
    
  return (
    <div className="user-list-wrapper">
			{users && (
				<ul className="user-list">
					{users?.map((user, i) => (
						<ListItem key={i} setShow={setShow} show={show} user={user} setUserFromUserlist={setUserFromUserlist} />
					))}
        </ul>
			)}
    </div>
  )
}

export default UserList