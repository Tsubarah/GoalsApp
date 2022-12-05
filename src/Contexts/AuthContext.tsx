import { createContext, useContext, useEffect, useState } from "react"
import { IUser } from "../typings/Userinterface"
// import useUsers from "../services/useUsers"

type ContextProps = {
  children: React.ReactNode
}

interface AuthContextInterface {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
  currentUser: IUser | undefined
  // setCurrentUser: React.Dispatch<React.SetStateAction<IUser | undefined>>,
  users: IUser[] | undefined
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>
  isManager: boolean
  setIsManager: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
)

const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }: ContextProps) => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>()
  const [isManager, setIsManager] = useState<boolean>(false)
  const [users, setUsers] = useState<IUser[]>()
  const [isLoading, setIsLoading] = useState(false)
  //   const { getCurrentUser } = useUsers()
  const getCurrentUser = async () => {
    try {
      await fetch(`https://random-data-api.com/api/v2/users?size=1`)
        .then(async (response) => {
          if (response != null && response.ok) {
            const data = await response.json()
            if (data !== null) {
              // // console.log("data", data)
              // currentUser = { ...data, jobTitle: "Intern" }
              // console.log('currentUser', currentUser)
              if (!window.localStorage.getItem("currentUser")) {
                window.localStorage.setItem('currentUser', JSON.stringify({...data, jobTitle: "Intern"}))
                console.log('hejsan')
              }


              //   console.log('first', current)
              setCurrentUser({ ...data, jobTitle: "Intern" })
            }
          } else {
            throw new Error("Users not found")
          }
        })
        .catch((error) => {
          throw new Error("Users not found")
        })
    } catch (err) { }
  }

  useEffect(() => {
    if (!currentUser) {
      setIsLoading(true)
      getCurrentUser()
    }
  }, [])

  //   const currentUser: IUser = {
  //     displayName: "LOL",
  //     id: "1",
  //     jobTitle: "Intern",
  //     mail: "LOL@gmail.com",
  //     mobilePhone: +46728523253,
  //     avatar: "",
  //   }

  // const lsObjekt: any = window.localStorage.getItem('currentUser')
  // let currentUser = JSON.parse(lsObjekt)

  //     currentUser =  {...currentUser, jobTitle: "Intern"}
  //     console.log('currentUser', currentUser)



  // console.log("Frank", frank)



  useEffect(() => {
    if (currentUser) {
      setIsManager(currentUser?.jobTitle === "Intern")
      setIsLoading(false)
      console.log('currentUser', currentUser)
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

export { AuthContextProvider as default, useAuthContext }
