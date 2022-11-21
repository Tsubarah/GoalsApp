import { useEffect, useState } from 'react'
import Profile from "./Profile";
import useUsers from "../services/useUsers";
import { IGoal } from "../typings/Goal";
import { useAuthContext } from "../Contexts/AuthContext";
import { useParams } from 'react-router-dom'
import { IUser } from '../typings/User'
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
  const { getUsersPhotoUrl } = useUsers()
  const [updatedTarget, setUpdatedTarget] = useState<IUser>(target)

  console.log('currentUser', currentUser)

  useEffect(() => {
    if (!currentUser) {
        return;
      }

      getUsersPhotoUrl(currentUser.token, target.id).then(imageUrl => {
        if (imageUrl) {
          setUpdatedTarget({
            ...target, imageUrl: imageUrl
          })
        }
      })
      
    },[target])

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
            <Profile updatedTarget={updatedTarget}/>
          </div>
        </div>
      </div>
  )
};

export default UserInfo;
