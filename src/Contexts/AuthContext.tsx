import { createContext, useContext, useEffect, useState } from "react"
import useLocalStorage from "../Hooks/useLocalStorage"
import { IUser } from "../typings/Userinterface"

type ContextProps = {
  children: React.ReactNode
}
interface AuthContextInterface {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
  currentUser: IUser
  users: IUser[] | undefined
  isManager: boolean
  setIsManager: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
)

const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }: ContextProps) => {
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", {
    first_name: "string",
    last_name: "string",
    displayName: "string",
    id: "string",
    jobTitle: "Intern",
    email: "string",
    mobilePhone: 0,
    avatar: "string",
  })
  const [isManager, setIsManager] = useState<boolean>(false)
  const [users, setUsers] = useLocalStorage("users", [])
  const [isLoading, setIsLoading] = useState(false)

  const getCurrentUser = async () => {
    try {
      await fetch(`https://random-data-api.com/api/v2/users?size=1`)
        .then(async (response) => {
          if (response != null && response.ok) {
            const data = await response.json()
            if (data !== null) {
              if (currentUser.displayName === "string") {
                setCurrentUser({ ...data, jobTitle: "Intern" })
                console.log("currentUser", currentUser)
              }
            }
          } else {
            throw new Error("Users not found")
          }
        })
        .catch((error) => {
          throw new Error("Users not found")
        })
    } catch (err) {}
  }

  const getUsers = async () => {
    try {
      await fetch(`https://random-data-api.com/api/v2/users?size=7`)
        .then(async (response) => {
          if (response != null && response.ok) {
            const data = await response.json()
            if (data !== null) {
              if (!users.length) {
                setUsers(data)
              }
            }
          } else {
            throw new Error("Users not found")
          }
        })
        .catch((error) => {
          throw new Error("Users not found")
        })
    } catch (err) {}
  }

  useEffect(() => {
    getCurrentUser()
    getUsers()
    if (currentUser) {
      setIsManager(currentUser?.jobTitle === "Intern")
      setIsLoading(false)
    }
  }, [])

  const contextValues: AuthContextInterface = {
    setIsLoading,
    isLoading,
    currentUser,
    users,
    isManager,
    setIsManager,
  }

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider as default, useAuthContext }
