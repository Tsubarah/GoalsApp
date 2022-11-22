import { useEffect, useState } from "react";
import { useAuthContext } from "../Contexts/AuthContext";
import useUsers from "../services/useUsers";
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useParams } from 'react-router-dom'
import { IUser } from "../typings/Userinterface";

const Profile = () => {
    let targets: any = window.localStorage.getItem('target')
    let target = JSON.parse(targets)
    
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

      if (target) {
        getUsersPhotoUrl(currentUser.token, target.id).then(imageUrl => {
            setUpdatedTarget({
              ...target, imageUrl: imageUrl
            })
        })
      }
    },[currentUser, target.id])


    return (
        <div className="profile">
          {target && id === target.id ? (
            <>
              <img src={updatedTarget?.imageUrl ? updatedTarget.imageUrl : placeholder} alt={updatedTarget?.displayName} />
              <h2>{updatedTarget?.displayName}</h2>
              <h3>{updatedTarget?.jobTitle}</h3>
            </>
          ) : 
            <>
              {photoUrl && <img src={photoUrl ? photoUrl : placeholder} alt={currentUser?.displayName} />}
              <h2>{currentUser?.displayName}</h2>
              <h3>{currentUser?.jobTitle}</h3>
            </>
          }
        </div>
    )
}

export default Profile