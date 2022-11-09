import Profile from "./Profile";
import { FC, useEffect, useState } from "react";
import { useAuth } from "../services/auth";
import useUsers from "../services/useUsers";
import { IUser } from '../typings/User'

const UserInfo:FC = () => {
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
      <div className="user-wrapper">
        <div className="user">
          <div className="user-stats">
            <p><strong>Mail:</strong> {userData?.mail}</p>
            <p><strong>ID:</strong> {userData?.id}</p>
            <p><strong>Phone number:</strong> {userData?.mobilePhone}</p>
          </div>
          <div className="user-profile">
            <Profile userdata={userData}/>
          </div>
        </div>
      </div>
  )
};

export default UserInfo;
