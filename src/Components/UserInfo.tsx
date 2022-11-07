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
            <h4>Mail: {userData?.mail}</h4>
            <h4>ID: {userData?.id}</h4>
            <h4>Phone number: {userData?.mobilePhone}</h4>
          </div>
          <div className="user-profile">
            <Profile userdata={userData}/>
          </div>
        </div>
      </div>
    )
};

export default UserInfo;
