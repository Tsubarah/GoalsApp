import { useEffect, useState } from "react"
import { useAuthContext } from "../Contexts/AuthContext"
// import useUsers from "../services/useUsers"
import placeholder from "../Assets/Images/placeholder-image.jpeg"
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

  const [photoUrl, setPhotoUrl] = useState<string>()
  const [updatedTarget, setUpdatedTarget] = useState<IUser>()

  useEffect(() => {
    if (!currentUser) {
      return
    }

    if (!user) {
      return
    }
  }, [currentUser, user])

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
