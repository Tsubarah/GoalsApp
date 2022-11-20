import { useEffect, useState } from "react";
import { useAuthContext } from "../Contexts/AuthContext";
import useUsers from "../services/useUsers";
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const [photoUrl, setPhotoUrl] = useState<string>();
    const { accessToken, currentUser } = useAuthContext();
    const { getProfilePhotoUrl } = useUsers();
    const { id } = useParams()

    let targets: any = window.localStorage.getItem('target')
    // console.log('targets', targets)
    let target = JSON.parse(targets)
    // console.log('target', target)

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
          {target && id === target.id ? (
            <>
              <img src={target?.imageUrl ? target.imageUrl : placeholder} alt={target?.displayName} />
              <h2>{target?.displayName}</h2>
              <h3>{target?.jobTitle}</h3>
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