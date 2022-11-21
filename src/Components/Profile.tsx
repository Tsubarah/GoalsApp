import { useEffect, useState } from "react";
import { useAuthContext } from "../Contexts/AuthContext";
import useUsers from "../services/useUsers";
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useParams } from 'react-router-dom'
import { IUser } from '../typings/User'

type ProfileProps ={
    updatedTarget: IUser
}

const Profile = ({updatedTarget}:ProfileProps) => {
    let targets: any = window.localStorage.getItem('target')
    // console.log('targets', targets)
    let target = JSON.parse(targets)
    // console.log('target', target)
    
    const { currentUser } = useAuthContext()
    const { getUsersPhotoUrl } = useUsers()
    // const [updatedTarget, setUpdatedTarget] = useState<IUser>(target)
    const { getProfilePhotoUrl } = useUsers();
    const { id } = useParams()
    const [photoUrl, setPhotoUrl] = useState<string>();


    // useEffect(() => {
    //     if (!currentUser) {
    //       return;
    //     }

    //     getUsersPhotoUrl()
    //     async function getPhoto(accessToken: string) {
    //       setPhotoUrl(await getProfilePhotoUrl(currentUser.token));
    //     }
    //     getPhoto(currentUser.token);
    //   }, [currentUser.token]);
      
    // useEffect(() => {
    // if (!currentUser) {
    //     return;
    //   }

    //   getUsersPhotoUrl(currentUser.token, target.id).then(imageUrl => {
    //     if (imageUrl) {
    //       setUpdatedTarget({
    //         ...target, imageUrl: imageUrl
    //       })
    //     }
    //   })
      
    // },[target])


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