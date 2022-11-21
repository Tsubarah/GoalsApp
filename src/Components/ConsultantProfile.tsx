import { useEffect, useState } from 'react'
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import useUsers from "../services/useUsers";
import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from '../typings/User'
// import { useAuthContext } from '../Contexts/AuthContext'
// import { IUser } from '../typings/User'

const ConsultantProfile = () => {
    let targets: any = window.localStorage.getItem('target')
    // console.log('targets', targets)
    let target = JSON.parse(targets)

    const { currentUser } = useAuthContext()
    const { getUsersPhotoUrl } = useUsers()
    const [updatedTarget, setUpdatedTarget] = useState<IUser>(target)

//   const { targetedUser } = useAuthContext()
// console.log('target', target)

useEffect(() => {
    if (!currentUser) {
        return;
      }

      getUsersPhotoUrl(currentUser.token, target.id).then(imageUrl => {
        if (imageUrl) {
          setUpdatedTarget({
            ...target, imageUrl: imageUrl
          })
        }
      })
      
    },[target])

  return (
    <div className='consultant-profile'>
      <img src={updatedTarget?.imageUrl ? updatedTarget.imageUrl : placeholder} className='consultant-img' alt="" />
      <h2 className="profile-name">{updatedTarget?.displayName}</h2>
      <p className="profile-text">{updatedTarget?.jobTitle}</p>
      <h4 className="profile-h4">{updatedTarget?.mail}</h4>
      {/* <h4 className="profile-h4">info</h4>
      <p className="profile-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <h4 className="profile-h4">Details</h4>
      <p className="profile-text">0989542837</p> */}
    </div>
  )
}

export default ConsultantProfile