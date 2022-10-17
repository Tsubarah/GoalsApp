import Sidebar from "../Components/Sidebar"
import UserList from "../Components/Userlist"
import './managerPage.css'
import Modal from "../Components/Modal"

const ManagerPage = () => {
    return (
        <div className="manager-page-wrapper">
            <Sidebar />

                

            <UserList />

            <Modal />
        </div>
    )
}

export default ManagerPage