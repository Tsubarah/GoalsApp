import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useAuthContext } from '../Contexts/AuthContext'

const ConsultantProfile = () => {
  const { targetedUser } = useAuthContext()
  return (
    <div className='consultant-profile'>
      <img src={targetedUser?.imageUrl ? targetedUser?.imageUrl : placeholder} className='consultant-img' alt="" />
      <h2 className="profile-name">{targetedUser?.displayName}</h2>
      <p className="profile-text">{targetedUser?.jobTitle}</p>
      <h4 className="profile-h4">{targetedUser?.mail}</h4>
    </div>
  )
}

export default ConsultantProfile