import { useEffect, useState } from "react";
import { useAuthContext } from "../Contexts/AuthContext";
import useUsers from "../services/useUsers";
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useParams } from 'react-router-dom'
import { IUser } from "../typings/Userinterface";

type ProfileProps = {
  user: IUser | undefined,
}

const Profile = ({ user }:ProfileProps) => {
  const { currentUser } = useAuthContext()
  const { getUsersPhotoUrl, getProfilePhotoUrl } = useUsers()
  const { id } = useParams()

  const [photoUrl, setPhotoUrl] = useState<string>();
  const [updatedTarget, setUpdatedTarget] = useState<IUser>()
  
  useEffect(() => {
    if (!currentUser) {
        return;
      }
    getProfilePhotoUrl(currentUser.token).then(imageUrl => {
      setPhotoUrl(imageUrl)
    })

    if (!user) {
      return
    }
    getUsersPhotoUrl(currentUser.token, user.id).then(imageUrl => {
      setUpdatedTarget({
        ...user, imageUrl: imageUrl
      })
    })
    
  },[currentUser, user])


  return (
    <div className="profile">
      {user && id === user.id ? (
        <>
          <img src={updatedTarget?.imageUrl 
                      ? updatedTarget.imageUrl 
                      : placeholder
                    } 
                    alt={updatedTarget?.displayName} 
          />
          <h2>{updatedTarget?.displayName}</h2>
          <h3>{updatedTarget?.jobTitle}</h3>
        </>
      ) : 
        <>
          {photoUrl && 
            <img src={photoUrl 
                        ? photoUrl 
                        : placeholder
                      } 
                      alt={currentUser?.displayName} 
            />
          }
          <h2>{currentUser?.displayName}</h2>
          <h3>{currentUser?.jobTitle}</h3>
        </>
      }
    </div>
  )
}

export default Profile