import placeholder from '../Assets/Images/placeholder-image.jpeg'
// import { useAuthContext } from '../Contexts/AuthContext'
// import { IUser } from '../typings/User'

const ConsultantProfile = () => {
//   const { targetedUser } = useAuthContext()
let targets: any = window.localStorage.getItem('target')
// console.log('targets', targets)
let target = JSON.parse(targets)
// console.log('target', target)

  return (
    <div className='consultant-profile'>
      <img src={target.imageUrl ? target?.imageUrl : placeholder} className='consultant-img' alt="" />
      <h2 className="profile-name">{target?.displayName}</h2>
      <p className="profile-text">{target?.jobTitle}</p>
      <h4 className="profile-h4">{target?.mail}</h4>
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