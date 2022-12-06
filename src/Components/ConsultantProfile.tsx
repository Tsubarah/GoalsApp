import { useEffect, useState } from "react"
import placeholder from "../Assets/Images/placeholder-image.jpeg"
import useUsers from "../services/useUsers"
import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from "../typings/Userinterface"

type ConsultantProps = {
  user: IUser | undefined
}

const ConsultantProfile = ({ user }: ConsultantProps) => {
  const { currentUser } = useAuthContext()
  // const { getUsersPhotoUrl } = useUsers()

  const [updatedTarget, setUpdatedTarget] = useState<IUser | null>()

  const getPhotos = () => {
    if (!currentUser) {
      return
    }

    if (!user) {
      return
    }
    // getUsersPhotoUrl(currentUser.token, user.id).then(imageUrl => {
    //   setUpdatedTarget({
    //     ...user, imageUrl: imageUrl
    //   })
    // })
  }
  useEffect(() => {}, [currentUser, user])

  return (
    <div className="consultant-profile">
      <img
        src={user?.avatar ? user.avatar : placeholder}
        className="consultant-img"
        alt=""
      />
      <h2 className="profile-name">
        {user?.first_name} {user?.last_name}
      </h2>
      <p className="profile-text">{user?.jobTitle}</p>
      <h4 className="profile-h4">{user?.email}</h4>
    </div>
  )
}

export default ConsultantProfile
