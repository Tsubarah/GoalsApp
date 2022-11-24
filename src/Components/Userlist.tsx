import ListItem from "./ListItem"
import { useAuthContext } from "../Contexts/AuthContext";
import { IUser, ITeam } from "../typings/Userinterface";
import { useState } from 'react'

type listProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
  setUserFromUserlist: (user: IUser) => void,
  team: ITeam | undefined,
}

const UserList = ({show, setShow, setUserFromUserlist, team}: listProps)  => {
  const { users } = useAuthContext()
  const [isActive, setIsActive] = useState("")
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
                id={i}
                setShow={setShow} 
                show={show} 
                user={user} 
                setUserFromUserlist={setUserFromUserlist} 
                setIsActive={setIsActive}
                isActive={isActive}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default UserList