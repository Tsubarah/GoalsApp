import { IUser } from '../typings/Userinterface'
import placeholder from "../Assets/Images/placeholder-image.jpeg"

type ProfileProps = {
	user: IUser | undefined,
}

const ProfileInfo = ({user}: ProfileProps) => {
	return (
		<>
			<img src={user?.avatar ? user.avatar : placeholder}
				alt={user?.displayName}
      />

			<h2>{user?.first_name} {user?.last_name}</h2>
			<h3>{user?.jobTitle}</h3>
		</>
	)
}

export default ProfileInfo