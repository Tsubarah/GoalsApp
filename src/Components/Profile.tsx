import { useEffect, useState } from "react";
import { useAuth } from "../services/auth";
import useUsers from "../services/useUsers";
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useAuthContext } from "../Contexts/AuthContext";

const Profile = () => {
    const [photoUrl, setPhotoUrl] = useState<string>();
    const { accessToken } = useAuth();
    const { currentUser } = useAuthContext()
    const { getProfilePhotoUrl } = useUsers();

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
            {photoUrl && <img src={photoUrl ? photoUrl : placeholder} alt={currentUser?.displayName} />}
            <h2>{currentUser?.displayName}</h2>
            <h3>{currentUser?.jobTitle}</h3>
        </div>
    )
}

export default Profile