import Profile from "./Profile";
import { IGoal } from "../typings/Goal";
import { useAuthContext } from "../Contexts/AuthContext";
import { useParams } from 'react-router-dom'
import { ClassNames } from "@emotion/react";
import goalIcon from '../Assets/Images/goal-icon.png'

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
                <div className="user-goals">
                  <div className="user-all-goals goals">
                    <div className="goal-inner">
                      <img src={goalIcon} alt="goals" />
                      <p className="goal-number"><strong>{goals.length}</strong></p>
                    </div>
                    <p className="goals-p">All</p>
                  </div>
                  <div className="user-incomplete-goals goals">
                    <div className="goal-inner">
                      <img src={goalIcon} alt="goals" />
                      <p className="goal-number"><strong>2</strong></p>
                    </div>
                    <p className="goals-p">Incomplete</p>
                  </div>
                  <div className="user-complete-goals goals">
                    <div className="goal-inner">
                    <img src={goalIcon} alt="goals" />
                    <p className="goal-number"><strong>2</strong></p>
                    </div>
                    <p className="goals-p">Completed</p>
                  </div>
                </div>
              </>
            ) :
              <>
                <p>{currentUser?.mail}</p>
                <p><strong>ID:</strong> {currentUser?.id}</p>
                <div className="user-goals">
                  <div className="user-all-goals goals">
                    <div className="goal-inner">
                      <img src={goalIcon} alt="goals" />
                      <p className="goal-number"><strong>{goals.length}</strong></p>
                    </div>
                    <p className="goals-p">All</p>
                  </div>
                  <div className="user-incomplete-goals goals">
                    <div className="goal-inner">
                      <img src={goalIcon} alt="goals" />
                      <p className="goal-number"><strong>2</strong></p>
                    </div>
                    <p className="goals-p">Incomplete</p>
                  </div>
                  <div className="user-complete-goals goals">
                    <div className="goal-inner">
                    <img src={goalIcon} alt="goals" />
                    <p className="goal-number"><strong>2</strong></p>
                    </div>
                    <p className="goals-p">Completed</p>
                  </div>
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
