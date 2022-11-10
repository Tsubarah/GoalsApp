import logo from '../Assets/Images/geshdo-logo.png'
import { useEffect, useState } from "react";
import { useAuth } from "../services/auth";
import useUsers from "../services/useUsers";
import {IUser} from "../typings/User"

const Navbar = () => {
    const { accessToken } = useAuth();
    const { getUserDetails } = useUsers();
    const [userData, setUserData] = useState<IUser>();

    useEffect(() => {
      if (!accessToken) {
        return;
      }
      async function getUser(accessToken: string) {
        const user = await getUserDetails(accessToken)
        if (user) {
          setUserData(user)
        }
      }
      getUser(accessToken)
    }, [accessToken]);
    
    // console.log("data", data)
    return (
        <nav className="navbar">
            <div className='navbar-logo'>
              <a href="/">
                <img src={logo} className="logo" alt="" />
              </a>
            </div>
            <div className="navbar-menu">
                <a href="/">Consultants</a>
                <a href={`/goals/${userData?.id}`}>Goals</a>
                <a href="/">Logout</a>
            </div>
        </nav>
    )
}

export default Navbar