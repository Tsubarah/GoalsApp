import placeholder from '../Assets/Images/placeholder-image.jpeg'

const ConsultantProfile = () => {
  return (
    
    <div className='consultantProfile rightSidbar'>
        <img src={placeholder} className='consultant-img' alt="" />
        <h3 className="profile-name">Jane Doe</h3>
            <p><strong>Title:<br /></strong></p>
            <p>Consultant</p>
            <p><strong>Info:<br /></strong></p>
            <p>Blablablabla bla</p>
            <p><strong>Information:<br /></strong></p>
            <p>0989542837</p>

            <div className='buttonsConsultant'>
                <button className='green-button'>Goals</button>
                <button className='green-button'>History</button>
            </div>

    </div>
    
  )
}

export default ConsultantProfile