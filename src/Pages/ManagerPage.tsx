import RightSidebar from "../Components/RightSidebar"
import Sidebar from "../Components/Sidebar"
import UserList from "../Components/Userlist"
import { useState, useEffect } from "react"
// import { useAuth } from "../services/auth";
import useUsers from "../services/useUsers";
import { useAuthContext } from "../Contexts/AuthContext";

const ManagerPage = () => {
  const [show, setShow] = useState<boolean | null>(null)
  const { accessToken, currentUser } = useAuthContext();
  const { getUsers } = useUsers()

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    
    async function getAllUsers(accessToken: string) {
      await getUsers(accessToken)
    }
    getAllUsers(accessToken)
  },[accessToken])

  return (
    <div className="manager-page-wrapper">
      <Sidebar />
        
      <UserList setShow={setShow} show={show} /> 

      <RightSidebar show={show} />

    </div>
  )
}

export default ManagerPage