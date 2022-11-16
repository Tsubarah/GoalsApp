import Profile from "./Profile";
import { IGoal } from "../typings/Goal";
import { useAuthContext } from "../Contexts/AuthContext";
import { useParams } from 'react-router-dom'
import { ClassNames } from "@emotion/react";

type UserInfoProps = {
  goals: IGoal[],
}

const UserInfo = ({ goals }: UserInfoProps) => {
  const { currentUser, targetedUser } = useAuthContext()
  const { id } = useParams()

  console.log('currentUser', currentUser)
  console.log('targetedUser', targetedUser)

    return (
      <div className="user-wrapper">
        <div className="user">
          <div className="user-stats">
            {targetedUser && id === targetedUser.id ? (
              <>
                <p><strong>Mail:</strong> {targetedUser?.mail}</p>
                <p><strong>ID:</strong> {targetedUser?.id}</p>
                <p><strong>Goals:</strong> {goals.filter(goal => !goal.isComplete).length}</p>
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
