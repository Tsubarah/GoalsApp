import { Navigate } from 'react-router-dom'
import { useAuth } from '../services/auth'

type AzureUser = {
    name: string;
    email: string;
}

const RequireAuth = (
    children,
    redirectTo = "/Auth",
) => {
    const { accessToken } = useAuth()
  return (
    accessToken
    ? children
    : <Navigate to={redirectTo}
  )
}

export default RequireAuth