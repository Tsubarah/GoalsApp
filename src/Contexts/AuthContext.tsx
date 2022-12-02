import { createContext, useContext, useEffect, useState } from 'react'
import { IUser } from '../typings/Userinterface'

type ContextProps = {
  children: React.ReactNode,
}

interface AuthContextInterface {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  isLoading: boolean,
  currentUser: IUser | undefined,
  // setCurrentUser: React.Dispatch<React.SetStateAction<IUser | undefined>>,
  users: IUser[] | undefined,
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>,
  isManager: boolean,
  setIsManager: React.Dispatch<React.SetStateAction<boolean>>
}
  
const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface)

const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }: ContextProps) => {
  // const [currentUser, setCurrentUser] = useState<IUser>()
  const [isManager, setIsManager] = useState<boolean>(false)
  const [users, setUsers] = useState<IUser[]>()
  const [isLoading, setIsLoading] = useState(true)

  const currentUser: IUser = {
    displayName: "LOL",
    id: "1",
    jobTitle: "Intern",
    mail: "LOL@gmail.com", 
    mobilePhone: +46728523253,
    imageUrl: "",
    token: "blabla"
  }

  console.log('currentUser', currentUser)

  useEffect(() => {
    if (!currentUser) {
      setIsLoading(true)
    }

    if (currentUser) {
      setIsManager(currentUser?.jobTitle === 'Intern')
      setIsLoading(false)
    }
  }, [currentUser])


  const contextValues: AuthContextInterface = {
    setIsLoading,
    isLoading,
    currentUser,
    // setCurrentUser,
    users,
    setUsers,
    isManager,
    setIsManager,
  }

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider as default, useAuthContext}