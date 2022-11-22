import { createContext, useContext, useEffect, useState } from 'react'
import BounceLoader from 'react-spinners/BounceLoader'
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
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!currentUser) {
      setIsLoading(true)
    }
    setTimeout(() => {
      if (currentUser) {
        setIsLoading(false)
      }
    }, 1500)
    
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
                  console.log('currentUser', user)
                  window.localStorage.setItem('target', JSON.stringify(user))
                  if (user) {
                    setCurrentUser({
                      ...user,
                      token: response.accessToken,
                    })}
                  })
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
        // userObject = {name: "", jobTitle:"", uid: ""};
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
  }

  return (
  <AuthContext.Provider value={contextValues}>
    {isLoading ? (
      <div id="loading-spinner">
        <BounceLoader size={150} color="#77a5c9" />
      </div>
    ) : (
      children
    )}
  </AuthContext.Provider>
  )
}


export { AuthContextProvider as default, useAuthContext}