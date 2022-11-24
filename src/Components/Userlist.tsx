import ListItem from "./ListItem"
import { useAuthContext } from "../Contexts/AuthContext";
import { IUser, ITeam } from "../typings/Userinterface";

type listProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
  setUserFromUserlist: (user: IUser) => void,
  team: ITeam | undefined,
}

const UserList = ({show, setShow, setUserFromUserlist, team}: listProps)  => {
  const { users } = useAuthContext()
  console.log('team', team)
    
  return (
    <div className="user-list-wrapper">
      {users && (
        <>
          <h1>{team?.name}</h1>
          <ul className="user-list">
            {users?.map((user, i) => (
              <ListItem 
                key={i} 
                setShow={setShow} 
                show={show} 
                user={user} 
                setUserFromUserlist={setUserFromUserlist} 
              />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default UserList