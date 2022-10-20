import placeholder from '../Assets/Images/placeholder-image.jpeg'

const Profile = () => {
    return (
        <div className="profile">
            <img src={placeholder} className="profile-img" alt="" />
            <h3 className="profile-name">John Doe</h3>
        </div>
    )
}

export default Profile