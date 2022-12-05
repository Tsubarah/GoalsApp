import { useEffect, useState } from "react"
import { useAuthContext } from "../Contexts/AuthContext"
import useUsers from "../services/useUsers"
import placeholder from "../Assets/Images/placeholder-image.jpeg"
import { useParams } from "react-router-dom"
import { IUser } from "../typings/Userinterface"
import LoadingSpinner from "./LoadingSpinner"

type ProfileProps = {
  user: IUser | undefined
}

const Profile = ({ user }: ProfileProps) => {
  const { currentUser } = useAuthContext()
  const { getUsersPhotoUrl, getProfilePhotoUrl } = useUsers()
  const { id } = useParams()

  const [photoUrl, setPhotoUrl] = useState<string>()
  const [updatedTarget, setUpdatedTarget] = useState<IUser>()
  console.log("user", user)

  useEffect(() => {
    if (!currentUser) {
      return
    }
    getProfilePhotoUrl(currentUser.token).then((imageUrl) => {
      setPhotoUrl(imageUrl)
    })

    if (!user) {
      return
    }
  }, [currentUser, user])

  return (
    <div className="profile">
      {!id && (
        <>
          {photoUrl && (
            <img
              src={photoUrl ? photoUrl : placeholder}
              alt={currentUser?.displayName}
            />
          )}
          <h2>{currentUser?.displayName}</h2>
          <h3>{currentUser?.jobTitle}</h3>
        </>
      )}

      {user && !user.id && <LoadingSpinner />}

      {user && id == user.id && (
        <>
          <img
            src={user?.avatar ? user.avatar : placeholder}
            alt={user?.displayName}
          />
          <h2>
            {user?.first_name} {user.last_name}
          </h2>
          <h3>{user?.jobTitle}</h3>
        </>
      )}
    </div>
  )
}

export default Profile
