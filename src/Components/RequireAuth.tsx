
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../Contexts/AuthContext'

export type Props = {
    children: JSX.Element,
}

const RequireAuth = ({
	children,
}:Props) => {
	const { currentUser, setIsLoading } = useAuthContext()

  useEffect(() => {
    setIsLoading(true)
		if (currentUser) {
			console.log('currentUser', currentUser)
			setIsLoading(false)
		}

  }, [currentUser])

	return (
		currentUser?.jobTitle === "Intern" 
			? children
			: <Navigate to={`/goals/${currentUser?.id}`} />
	)
}

export default RequireAuth