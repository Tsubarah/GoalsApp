import Profile from "./Profile";
import { IGoal } from "../typings/Goal";
import { useAuthContext } from "../Contexts/AuthContext";
import { useParams } from 'react-router-dom'


type UserInfoProps = {
  goals: IGoal[],
}

const UserInfo = ({ goals }: UserInfoProps) => {

    let targets: any = window.localStorage.getItem('target')
    // console.log('targets', targets)
    let target = JSON.parse(targets)
    // console.log('target', target)

  const { currentUser} = useAuthContext()
  const { id } = useParams()

  console.log('currentUser', currentUser)

    return (
      <div className="user-wrapper">
        <div className="user">
          <div className="user-stats">
            {target && id === target.id ? (
              <>
                <p><strong>Mail:</strong> {target?.mail}</p>
                <p><strong>ID:</strong> {target?.id}</p>
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
