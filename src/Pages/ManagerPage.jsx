
import RightSidbar from "../Components/RightSidbar"
import Sidebar from "../Components/Sidebar"
import UserList from "../Components/Userlist"

const ManagerPage = () => {
  return (
    <div className="manager-page-wrapper">
      <Sidebar />
        
       <UserList /> 

       <RightSidbar />

    </div>
  )
}

export default ManagerPage