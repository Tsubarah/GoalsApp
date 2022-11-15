import { createContext, useContext, useEffect, useState } from 'react'
import LoadingSpinner from '../Components/LoadingSpinner'
import { IUser } from '../typings/User'
import { useMsal } from '@azure/msal-react'
import { loginRequest } from "../authConfig";

type ContextProps = {
  children: React.ReactNode,
}

interface AuthContextInterface {
  currentUser: IUser | undefined,
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | undefined>>,
  targetedUser: IUser | undefined,
  setTargetedUser: React.Dispatch<React.SetStateAction<IUser | undefined>>,
  users: IUser[] | undefined,
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>,
  accessToken: string | undefined
}
  
const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface)

const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }: ContextProps) => {
  const { instance, accounts } = useMsal()
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [currentUser, setCurrentUser] = useState<IUser>()
  const [targetedUser, setTargetedUser] = useState<IUser>()
  const [users, setUsers] = useState<IUser[]>()
  // const [userEmail, setUserEmail] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    instance
      .handleRedirectPromise()
      .then((tokenResponse) => {
        if (tokenResponse === null && accounts.length === 0) {
          instance.loginRedirect(loginRequest);
        } else {
          instance
            .acquireTokenSilent({
              scopes: loginRequest.scopes,
              account: tokenResponse?.account!,
            })
            .then((response) => {
              // console.log('response', response)
              if (response.account) {
                instance.setActiveAccount(response.account);

                // store.setIdToken(response.idToken);
                // store.setAccessToken(response.accessToken);
                // store.setUsername(response.account?.name);
                setAccessToken(response.accessToken);
              }
            });
          // store.setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("auth error: " + error);
        // store.setIsLoading(false);
      });
  }, [accounts, instance]);

  const contextValues: AuthContextInterface = {
    currentUser,
    setCurrentUser,
    targetedUser,
    setTargetedUser,
    users,
    setUsers,
    accessToken,
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