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

    return (
      <div className="user-wrapper">
        <div className="user">
          <div className="user-stats">
            {targetedUser && id === targetedUser.id ? (
              <>
                <p><strong>Mail:</strong> {targetedUser?.mail}</p>
                <p><strong>ID:</strong> {targetedUser?.id}</p>
                <p><strong>Goals:</strong> {goals.length}</p>
              </>
            ) :
              <>
                <p><strong>Mail:</strong> {currentUser?.mail}</p>
                <p><strong>ID:</strong> {currentUser?.id}</p>
                <div className="user-goals">
                  <p><strong>Goals:</strong> {goals.length}</p>
                  <p><strong>Completed Goals:</strong> 4</p>
                </div>
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
