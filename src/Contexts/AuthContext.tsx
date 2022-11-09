import { createContext, useContext, useEffect, useState } from 'react'
import { 
    useAuth
     
    } from '../services/auth'

    type authProps = {
        accessToken: string,
        setAccessToken:
    }


const AuthContext = createContext()

const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState<AzureUser>()
    const [accessToken, setAccessToken] = useState<string>()
    const [loading, setLoading] = useState(true)
}
  return (
    <>
    </>
  )
}

export default AuthContext