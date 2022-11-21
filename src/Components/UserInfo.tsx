import { useState } from 'react'
import Profile from "./Profile";
import { IGoal } from "../typings/Goal";
import { useAuthContext } from "../Contexts/AuthContext";
import { useParams } from 'react-router-dom'
import { IUser } from '../typings/User'
type UserInfoProps = {
  goals: IGoal[],
}

const UserInfo = ({ goals }: UserInfoProps) => {
  let targets: any = window.localStorage.getItem('target')
  let target = JSON.parse(targets)

  const { currentUser} = useAuthContext()
  const { id } = useParams()
  const [updatedTarget, setUpdatedTarget] = useState<IUser>(target)

  return (
    <div className="user-wrapper">
      <div className="user">
        <div className="user-stats">
          {updatedTarget && id === updatedTarget.id ? (
            <>
              <p><strong>Mail:</strong> {updatedTarget?.mail}</p>
              <p><strong>ID:</strong> {updatedTarget?.id}</p>
              <p><strong>Goals:</strong> {goals.filter(goal => !goal.isComplete).filter(goal => !goal.isComplete).length}</p>
            </>
          ) :
            <>
              <p><strong>Mail:</strong> {currentUser?.mail}</p>
              <p><strong>ID:</strong> {currentUser?.id}</p>
              <p><strong>Goals:</strong> {goals.filter(goal => !goal.isComplete).length}</p>
            </>
          }
        </div>
        <div className="user-profile">
          <Profile />
        </div>
      </div>
    </div>
  )
};

export default UserInfo;
