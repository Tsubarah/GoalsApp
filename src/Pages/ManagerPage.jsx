
import RightSidbar from "../Components/RightSidbar"
import Sidebar from "../Components/Sidebar"
import UserList from "../Components/Userlist"
import { useState } from "react"

const ManagerPage = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="manager-page-wrapper">
      <Sidebar />
        
       <UserList setShow={setShow} show={show} /> 

       <RightSidbar setShow={setShow} show={show} />

    </div>
  )
}

export default ManagerPage