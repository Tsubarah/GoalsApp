import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../Contexts/AuthContext'

export type Props = {
    children: JSX.Element,
}

const RequireAuth = ({
	children,
}:Props) => {
	const { currentUser } = useAuthContext()

	return (
		currentUser
			? children
			: <Navigate to= "/"/>
	)
}

export default RequireAuth