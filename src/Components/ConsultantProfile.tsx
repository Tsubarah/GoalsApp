import placeholder from '../Assets/Images/placeholder-image.jpeg'

const ConsultantProfile = () => {
  return (
    <div className='consultant-profile'>
      <img src={placeholder} className='consultant-img' alt="" />
      <h2 className="profile-name">Jane Doe</h2>
      <h4 className="profile-h4">Title</h4>
      <p className="profile-text">Consultant</p>
      <h4 className="profile-h4">info</h4>
      <p className="profile-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <h4 className="profile-h4">Details</h4>
      <p className="profile-text">0989542837</p>
    </div>
  )
}

export default ConsultantProfile