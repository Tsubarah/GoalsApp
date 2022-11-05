import placeholder from '../Assets/Images/placeholder-image.jpeg'

const Profile = () => {
    return (
        <div className="profile">
            <img src={placeholder} className="profile-img" alt="" />
            <h2 className="profile-name">John Doe</h2>
            <h4>Manager</h4>
            <p><strong>Info:</strong> Blabla</p>
            <p><strong>Inormation:</strong> Blabla</p>

        </div>
    )
}

export default Profile