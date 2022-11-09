import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { IUser } from '../typings/User'

type UserProps = {
    userdata: IUser | undefined
}

const Profile = ({userdata}: UserProps) => {
    return (
        <div className="profile">
            <img src={placeholder} className="profile-img" alt="" />
            <h2>{userdata?.displayName}</h2>
            <h4>{userdata?.jobTitle}</h4>
        </div>
    )
}

export default Profile