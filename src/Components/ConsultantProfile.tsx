import { useEffect, useRef, useState } from 'react'
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import useUsers from "../services/useUsers";
import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from '../typings/Userinterface'

const ConsultantProfile = () => {
  let targets: any = window.localStorage.getItem('target')
  let target = JSON.parse(targets)

  const { currentUser } = useAuthContext()
  const { getUsersPhotoUrl } = useUsers()
  const [updatedTarget, setUpdatedTarget] = useState<IUser | null>()

  const getPhotos = () => {
    if (!currentUser) {
      return;
    }
    
    getUsersPhotoUrl(currentUser.token, target.id).then(imageUrl => {  
      setUpdatedTarget({
        ...target, imageUrl: imageUrl
      })
    })
  }
  useEffect(() => {
    if (!currentUser) {
        return;
      }

    getPhotos()

  }, [currentUser, target.id])

  return (
    <div className='consultant-profile'>
      <img src={updatedTarget?.imageUrl ? updatedTarget.imageUrl : placeholder} className='consultant-img' alt="" />
      <h2 className="profile-name">{updatedTarget?.displayName}</h2>
      <p className="profile-text">{updatedTarget?.jobTitle}</p>
      <h4 className="profile-h4">{updatedTarget?.mail}</h4>
    </div>
  )
}

export default ConsultantProfile