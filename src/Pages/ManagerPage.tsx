
import RightSidebar from "../Components/RightSidebar"
import Sidebar from "../Components/Sidebar"
import UserList from "../Components/Userlist"
import { useState } from "react"

const ManagerPage = () => {
  const [show, setShow] = useState<boolean | null>(null)
  return (
    <div className="manager-page-wrapper">
      <Sidebar />
        
      <UserList setShow={setShow} show={show} /> 

      <RightSidebar show={show} />

    </div>
  )
}

export default ManagerPage