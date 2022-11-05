import placeholder from '../Assets/Images/placeholder-image.jpeg'

const Profile = () => {
    return (
        <div className="profile">
            <img src={placeholder} className="profile-img" alt="" />
            <h2>John Doe</h2>
            <h4>Manager</h4>
        </div>
    )
}

export default Profile