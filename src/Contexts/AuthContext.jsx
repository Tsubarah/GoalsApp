import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from '../services/auth'
//import { useMsal } from '@azure/msal-react'

  
const AuthContext = createContext(null)

const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  //const { instance, accounts } = useMsal()
  const [currentUser, setCurrentUser] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [accessToken, setAccessToken] = useState()
  
  const auth = useAuth()

  currentUser === auth.user

  console.log('currentUser',currentUser)

  console.log('accessToken', accessToken)
  
  useEffect(()=> {
    setCurrentUser(user)
    setUserEmail(user?.email)
    setAccessToken(accessToken)
  },[])

  const contextValues = {
    currentUser,
    userEmail,
    accessToken,
    
  }

  return <AuthContext.Provider value={auth}>
    {children}
  </AuthContext.Provider>
  
}


export { useAuthContext, AuthProvider}