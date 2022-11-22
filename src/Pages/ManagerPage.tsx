import RightSidebar from "../Components/RightSidebar"
import Profile from "../Components/Profile";
import UserList from "../Components/Userlist"
import { useState, useEffect } from "react"
import useUsers from "../services/useUsers";
import { useAuthContext } from "../Contexts/AuthContext";

const ManagerPage = () => {
  const [show, setShow] = useState<boolean | null>(null)
  const { currentUser } = useAuthContext();
  const { getUsers, getGroups, getGroupId } = useUsers()
  
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
       <Profile />
      </div>
        
      <UserList setShow={setShow} show={show} /> 

      <RightSidebar show={show} />

    </div>
  )
}

export default ManagerPage