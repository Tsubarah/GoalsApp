import RightSidebar from "../Components/RightSidebar"
import Profile from "../Components/Profile";
import UserList from "../Components/Userlist"
import { useState, useEffect } from "react"
import useUsers from "../services/useUsers";
import { useAuthContext } from "../Contexts/AuthContext";
import { IUser } from "../typings/Userinterface";

const ManagerPage = () => {
  const [show, setShow] = useState<boolean | null>(null)
  const { currentUser } = useAuthContext();
  const { getUsers, getGroups, getGroupId } = useUsers()
  const [user, setUser] = useState<IUser>()

  const setUserFromUserlist = (user: IUser) => {
    setUser(user)
  }
  
  useEffect(() => {
    if (currentUser) {
      getUsers(currentUser.token)
      getGroups(currentUser.token)
      getGroupId(currentUser.token)
    }
  },[currentUser])
  
  return (
    <div className="manager-page-wrapper">
      <div className="sidebar">
       <Profile user={user} />
      </div>
        
      <UserList setShow={setShow} show={show} setUserFromUserlist={setUserFromUserlist} /> 

      <RightSidebar show={show} user={user} />

    </div>
  )
}

export default ManagerPage