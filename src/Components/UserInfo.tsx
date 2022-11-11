import Profile from "./Profile";
import { IGoal } from "../typings/Goal";
import { useAuthContext } from "../Contexts/AuthContext";

type UserInfoProps = {
  goals: IGoal[],
}

const UserInfo = ({ goals }: UserInfoProps) => {
  const { currentUser } = useAuthContext()

  console.log('currentUser', currentUser)

    return (
      <div className="user-wrapper">
        <div className="user">
          <div className="user-stats">
            <p><strong>Mail:</strong> {currentUser?.mail}</p>
            <p><strong>ID:</strong> {currentUser?.id}</p>
            <p><strong>Goals:</strong> {goals.length}</p>
          </div>
          <div className="user-profile">
            <Profile />
          </div>
        </div>
      </div>
  )
};

export default UserInfo;
