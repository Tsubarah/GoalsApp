import Sidebar from "../Components/Sidebar"
import UserList from "../Components/Userlist"


import './managerPage.css'

const ManagerPage = () => {
    return (
        <div className="manager-page-wrapper">
                <Sidebar />

            
                <UserList />
                
        </div>
    )
}

export default ManagerPage