import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from '../services/auth'
import LoadingSpinner from '../Components/LoadingSpinner'
import { IUser } from '../typings/User'
//import { useMsal } from '@azure/msal-react'

type ContextProps = {
  children: React.ReactNode,
}

interface AuthContextInterface {
  currentUser: IUser | undefined,
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | undefined>>,
  targetedUser: IUser | undefined,
  setTargetedUser: React.Dispatch<React.SetStateAction<IUser | undefined>>,
  users: IUser[] | undefined,
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>
}
  
const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface)

const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }: ContextProps) => {
  //const { instance, accounts } = useMsal()
  const [currentUser, setCurrentUser] = useState<IUser>()
  const [targetedUser, setTargetedUser] = useState<IUser>()
  const [users, setUsers] = useState<IUser[]>()
  // const [userEmail, setUserEmail] = useState()
  const [loading, setLoading] = useState(false)
  const [accessToken, setAccessToken] = useState()
  
  const auth = useAuth()
  
  useEffect(()=> {

  },[])

  const contextValues: AuthContextInterface = {
    currentUser,
    setCurrentUser,
    targetedUser,
    setTargetedUser,
    users, 
    setUsers
  }

  return (
  <AuthContext.Provider value={contextValues}>
    {loading ? (
      <div>
        <LoadingSpinner />
      </div>
    ) : (
      children
    )}
  </AuthContext.Provider>
  )
}


export { AuthContextProvider as default, useAuthContext}