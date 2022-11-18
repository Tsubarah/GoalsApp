import RightSidebar from "../Components/RightSidebar"
import Sidebar from "../Components/Sidebar"
import UserList from "../Components/Userlist"
import { useState, useEffect } from "react"
import useUsers from "../services/useUsers";
import { useAuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const ManagerPage = () => {
  const [show, setShow] = useState<boolean | null>(null)
  const { accessToken, currentUser } = useAuthContext();
  const { getUsers, getGroups } = useUsers()
  const navigate = useNavigate()
  
  useEffect(() => {

    // if (currentUser && currentUser.jobTitle !== "Intern") {
    //   navigate(`/goals/${currentUser.id}`)
    // }

    // console.log('currentUser', currentUser)
    if (currentUser) {
      getUsers(currentUser.token)
      getGroups(currentUser.token)
    }
  },[currentUser])
  
  return (
    <div className="manager-page-wrapper">
      <Sidebar />
        
      <UserList setShow={setShow} show={show} /> 

      <RightSidebar show={show} />

    </div>
  )
}

export default ManagerPage