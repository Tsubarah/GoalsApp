import ScrollSpy from "../Components/ScrollSpy"
import Sidebar from "../Components/Sidebar"
import UserList from "../Components/Userlist"

const ManagerPage = () => {
    return (
        <div className="manager-page-wrapper">
                <Sidebar />

                
            
                <UserList />
                
        </div>
    )
}

export default ManagerPage