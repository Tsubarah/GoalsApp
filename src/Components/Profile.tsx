import { useEffect, useState } from "react";
import { useAuth } from "../services/auth";
import useUsers from "../services/useUsers";
import { IUser } from '../typings/User'
import placeholder from '../Assets/Images/placeholder-image.jpeg'

type UserProps = {
    userdata: IUser | undefined
}

const Profile = ({userdata}: UserProps) => {
    const [photoUrl, setPhotoUrl] = useState<string>();
    const { accessToken } = useAuth();
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
            {photoUrl && <img src={photoUrl ? photoUrl : placeholder} alt={userdata?.displayName} />}
            <h2>{userdata?.displayName}</h2>
            <h3>{userdata?.jobTitle}</h3>
        </div>
    )
}

export default Profile