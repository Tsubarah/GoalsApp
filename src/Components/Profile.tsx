import placeholder from '../Assets/Images/placeholder-image.jpeg'

const Profile = () => {
    return (
        <div className="profile">
            <img src={placeholder} className="profile-img" alt="" />
            <h3 className="profile-name">John Doe</h3>
            <p><strong>Title:</strong> Manager</p>
            <p><strong>Info:</strong> Blabla</p>
            <p><strong>Inormation:</strong>Blabla</p>

        </div>
    )
}

export default Profile