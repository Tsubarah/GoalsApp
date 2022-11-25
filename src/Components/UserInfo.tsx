import { useState } from 'react'
import Profile from "./Profile";
import { IGoal } from "../typings/Goalinterface";
import { useAuthContext } from "../Contexts/AuthContext";
import { useParams } from 'react-router-dom'
import goalIcon from '../Assets/Images/goal-icon.png'
import { IUser } from '../typings/Userinterface'
import useUsers from "../services/useUsers"


type UserInfoProps = {
  goals: IGoal[],
  user: IUser | undefined,
}

const UserInfo = ({ goals, user }: UserInfoProps) => {
  const { currentUser} = useAuthContext()
  const { id } = useParams()
  const [updatedTarget, setUpdatedTarget] = useState<IUser | undefined>(user)


  const goalsCompleted = goals.filter((goal)=> goal.isComplete === true)
  const goalInComplete = goals.filter((goal) => goal.isComplete === false)



  console.log('currentUser', currentUser)


    return (
      <div className="user-wrapper">
        <div className="user">
          <div className="user-stats">
            {updatedTarget && id === updatedTarget.id ? (
              <>
                <p>{updatedTarget?.mail}</p>
                <hr />
                <p><strong>ID:</strong> {updatedTarget?.id}</p>
                <h2>Goals</h2>
                <hr />
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
                      <p className="goal-number"><strong>{goalInComplete.length}</strong></p>
                    </div>
                    <p className="goals-p">Incomplete</p>
                  </div>
                  <div className="user-complete-goals goals">
                    <div className="goal-inner">
                    <img src={goalIcon} alt="goals" />
                    <p className="goal-number"><strong>{goalsCompleted.length}</strong></p>
                    </div>
                    <p className="goals-p">Completed</p>
                  </div>
                </div>
                <hr />
                <p>Send an email to remind your consultant about their goals</p>
                <button onClick={()=>{}} className='send-mail-button button'>Send E-mail</button>
              </>
            ) :
              <>
                <p>{currentUser?.mail}</p>
                <hr />
                 <p><strong>ID:</strong> {currentUser?.id}</p> 
                <h2>Goals</h2>
                <hr />
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
                      <p className="goal-number"><strong>{goalInComplete.length}</strong></p>
                    </div>
                    <p className="goals-p">Incomplete</p>
                  </div>
                  <div className="user-complete-goals goals">
                    <div className="goal-inner">
                    <img src={goalIcon} alt="goals" />
                    <p className="goal-number"><strong>{goalsCompleted.length}</strong></p>
                    </div>
                    <p className="goals-p">Completed</p>
                  </div>
                </div>
                <hr />
              </>
            }
          </div>
          <div className="user-profile">
            <Profile user={user} />
          </div>
        </div>
      </div>
    
  )
};

export default UserInfo;
