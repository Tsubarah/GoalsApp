import Profile from './Profile';
import {  useEffect, useState } from "react";
import { useAuth } from "../services/auth";
import useUsers from "../services/useUsers";
import { IUser } from '../typings/User'

const Sidebar = () => {
  const { accessToken } = useAuth();
  const { getUserDetails } = useUsers()
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
  },[accessToken])

  return (

    <div className="sidebar">
       <Profile userdata={userData}/>
    </div>

  )
}

export default Sidebar