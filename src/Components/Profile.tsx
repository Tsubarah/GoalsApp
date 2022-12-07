import { useAuthContext } from "../Contexts/AuthContext"
import { useParams } from "react-router-dom"
import { IUser } from "../typings/Userinterface"
import ProfileInfo from "./ProfileInfo"
import LoadingSpinner from "./LoadingSpinner"

type ProfileProps = {
  user: IUser | undefined
}

const Profile = ({ user }: ProfileProps) => {
  const { currentUser } = useAuthContext()
  const { id } = useParams()

  return (
    <div className="profile">
      {!id && currentUser && (
        <ProfileInfo user={currentUser} />
      )}

      {id == currentUser?.id && (
        <ProfileInfo user={currentUser} />
      )}

      {user && !user.id && <LoadingSpinner />}

      {user && id == user.id && (
       <ProfileInfo user={user} />
      )}
    </div>
  )
}

export default Profile
