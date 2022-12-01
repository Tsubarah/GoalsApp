import { createContext, useContext, useEffect, useState } from 'react'
import { IUser } from '../typings/Userinterface'
import { useMsal } from '@azure/msal-react'
import { loginRequest } from "../authConfig";

type ContextProps = {
  children: React.ReactNode,
}

interface AuthContextInterface {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  isLoading: boolean,
  currentUser: IUser | undefined,
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | undefined>>,
  users: IUser[] | undefined,
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>,
  accessToken: string | undefined,
  isManager: boolean,
  setIsManager: React.Dispatch<React.SetStateAction<boolean>>
}
  
const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface)

const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }: ContextProps) => {
  const { instance, accounts } = useMsal()
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [currentUser, setCurrentUser] = useState<IUser>()
  const [isManager, setIsManager] = useState<boolean>(false)
  const [users, setUsers] = useState<IUser[]>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!currentUser) {
      setIsLoading(true)
    }

    if (currentUser) {
      setIsManager(currentUser?.jobTitle === 'Intern')
      setIsLoading(false)
    }
  }, [currentUser])

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
                getUserDetails(response.accessToken).then(user => {
                  // console.log('currentUser', user)
                  if (user) {
                    setCurrentUser({
                      ...user,
                      token: response.accessToken,
                    })}
                  })
                  setAccessToken(response.accessToken);
                }
              });
            }
          })
          .catch((error) => {
            console.log("auth error: " + error);
          });
  }, [accounts, instance]);

  const getUserDetails = async (accessToken: string) : Promise<IUser | undefined>=>  {
    if (!accessToken) {
        return undefined;
    }
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;
    headers.append("Authorization", bearer);
    headers.append("Content-Type", "json");
    const options = {
        method: "GET",
        headers: headers,
    };
    try {
      const user = await fetch("https://graph.microsoft.com/v1.0/me", options)
        .then(async (response) => {
            if (response != null && response.ok) {
              const data = await response.json();
              if (data !== null) {
                return {
                  displayName: data.displayName,
                  id: data.id,
                  jobTitle: data.jobTitle,
                  mail: data.mail,
                  mobilePhone: data.mobilePhone,
                  token: accessToken,
                }
              }
            } else {
                throw new Error("User not found");
            }
        })
        .catch((error) => {
            throw new Error("User not found");
        });
      return user;
    } catch (err) {
        console.log(err)
    }
};

  const contextValues: AuthContextInterface = {
    setIsLoading,
    isLoading,
    currentUser,
    setCurrentUser,
    users,
    setUsers,
    accessToken,
    isManager,
    setIsManager,
  }

  return (
<<<<<<< HEAD
  <AuthContext.Provider value={contextValues}>
    {children}
  </AuthContext.Provider>
=======
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
>>>>>>> 1908f01 (.)
  )
}

export { AuthContextProvider as default, useAuthContext}