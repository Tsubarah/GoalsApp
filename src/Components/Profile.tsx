import { useEffect, useState } from "react";
import { useAuthContext } from "../Contexts/AuthContext";
import useUsers from "../services/useUsers";
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const [photoUrl, setPhotoUrl] = useState<string>();
    const { accessToken } = useAuthContext();
    const { currentUser, targetedUser } = useAuthContext()
    const { getProfilePhotoUrl } = useUsers();
    const { id } = useParams()

    useEffect(() => {
        if (!accessToken) {
          return;
        }
        async function getPhoto(accessToken: string) {
          setPhotoUrl(await getProfilePhotoUrl(accessToken));
        }
        getPhoto(accessToken);
      }, [accessToken]);

    return (
        <div className="profile">
          {targetedUser && id === targetedUser.id ? (
            <>
              {photoUrl && <img src={photoUrl ? photoUrl : placeholder} alt={targetedUser?.displayName} />}
              <h2>{targetedUser?.displayName}</h2>
              <h3>{targetedUser?.jobTitle}</h3>
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