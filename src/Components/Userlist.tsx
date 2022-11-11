import ListItem from "./ListItem"
import {  useEffect, useState } from "react";
import { useAuth } from "../services/auth";
import useUsers from "../services/useUsers";
import { IUser } from '../typings/User'

type listProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
}

const UserList = ({show, setShow}: listProps)  => {
  const { accessToken } = useAuth();
  const { getUsers } = useUsers()
  const [usersData, setUsersData] = useState<[IUser]>();

	useEffect(() => {
    if (!accessToken) {
      return;
    }
    
    async function getAllUsers(accessToken: string) {
      const users = await getUsers(accessToken)
      if (users) {
        setUsersData(users)
      }
    }
    getAllUsers(accessToken)
  },[accessToken])

	useEffect(() => {
		console.log('usersData', usersData)
	},[usersData])
    
  return (
    <div className="user-list-wrapper">
			{usersData && (
				<ul className="user-list">
					{usersData.map((user) => (
						<ListItem setShow={setShow} show={show} user={user} />
					))}
      	</ul>
			)}
    </div>
  )
}

export default UserList