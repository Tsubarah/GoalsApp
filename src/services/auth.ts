// // import { useMsal } from "@azure/msal-react";
// // import { useEffect, useState } from "react";
// // import { loginRequest } from "../authConfig";
// // import store from "../store/store";

// // type AzureUser = {
// //   name: string;
// //   email: string;
// // };

// // export const useAuth = () => {
// //   const { instance, accounts } = useMsal();
// //   const [user, setUser] = useState<AzureUser>();
// //   const [accessToken, setAccessToken] = useState<string | undefined>();

// //   useEffect(() => {
// //     instance
// //       .handleRedirectPromise()
// //       .then((tokenResponse) => {
// //         if (tokenResponse === null && accounts.length === 0) {
// //           instance.loginRedirect(loginRequest);
// //         } else {
// //           instance
// //             .acquireTokenSilent({
// //               scopes: loginRequest.scopes,
// //               account: tokenResponse?.account!,
// //             })
// //             .then((response) => {
// //               // console.log('response', response)
// //               if (response.account) {
// //                 instance.setActiveAccount(response.account);

// //                 // store.setIdToken(response.idToken);
// //                 // store.setAccessToken(response.accessToken);
// //                 // store.setUsername(response.account?.name);
// //                 setAccessToken(response.accessToken);
// //                 setUser({
// //                   name: response.account?.name ?? "",
// //                   email: response.account?.username ?? "",
// //                 });
// //               }
// //             });
// //           // store.setIsLoading(false);
// //         }
// //       })
// //       .catch((error) => {
// //         console.log("auth error: " + error);
// //         // store.setIsLoading(false);
// //       });
// //   }, [accounts, instance]);

// //   return {  accessToken, user };
// // };

// import { createContext, useContext, useEffect, useState } from 'react'
// import LoadingSpinner from '../Components/LoadingSpinner'
// import { IUser } from '../typings/User'
// import { useMsal } from '@azure/msal-react'
// import { loginRequest } from "../authConfig";
// type ContextProps = {
//   children: React.ReactNode,
// }
// interface AuthContextInterface {
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
//   loading: boolean,
//   currentUser: IUser | undefined,
//   setUser: (user: IUser) => void,
//   user: IUser | undefined,
//   setCurrentUser: React.Dispatch<React.SetStateAction<IUser | undefined>>,
//   targetedUser: IUser | undefined,
//   setTargetedUser: React.Dispatch<React.SetStateAction<IUser | undefined>>,
//   users: IUser[] | undefined,
//   setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>,
//   accessToken: string | undefined,
// }
  
// const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface)
// const useAuthContext = () => useContext(AuthContext)
// const AuthContextProvider = ({ children }: ContextProps) => {
//   const { instance, accounts } = useMsal()
//   const [accessToken, setAccessToken] = useState<string | undefined>();
//   const [currentUser, setCurrentUser] = useState<IUser>()
//   const [targetedUser, setTargetedUser] = useState<IUser>()
//   const [users, setUsers] = useState<IUser[]>()
//   // const [userEmail, setUserEmail] = useState()
//   const [loading, setLoading] = useState(false)
//   const setUser = (user: IUser)  => {
//     setCurrentUser(user);
//   }
//   const getUser = () => {
//     return currentUser;
//   }
//   useEffect(() => {
//     instance
//       .handleRedirectPromise()
//       .then((tokenResponse) => {
//         if (tokenResponse === null && accounts.length === 0) {
//           instance.loginRedirect(loginRequest);
//         } else {
//           instance
//             .acquireTokenSilent({
//               scopes: loginRequest.scopes,
//               account: tokenResponse?.account!,
//             })
//             .then((response) => {
//               // console.log('response', response)
//               if (response.account) {
//                 instance.setActiveAccount(response.account);
//                 getUserDetails(response.accessToken).then(user => {
//                   console.log('user', user)
//                   if (user) setUser({
//                     ...user,
//                     token: response.accessToken,
//                   }); 
//                 });
                
//                 // store.setIdToken(response.idToken);
//                 // store.setAccessToken(response.accessToken);
//                 // store.setUsername(response.account?.name);
//                 // setAccessToken(response.accessToken);
//                 // // setUser({
//                 // //   token: response.accessToken,
//                 // // })
//               }
//             });
//           // store.setIsLoading(false);
//         }
//       })
//       .catch((error) => {
//         console.log("auth error: " + error);
//         // store.setIsLoading(false);
//       });
//   }, [accounts, instance]);
//   const getUserDetails = async (accessToken: string) : Promise<IUser | undefined>=>  {
//     if (!accessToken) {
//         return undefined;
//     }
//     const headers = new Headers();
//     const bearer = `Bearer ${accessToken}`;
//     headers.append("Authorization", bearer);
//     headers.append("Content-Type", "json");
//     const options = {
//         method: "GET",
//         headers: headers,
//     };
//     try {
//       const user = await fetch("https://graph.microsoft.com/v1.0/me", options)
//         .then(async (response) => {
//             if (response != null && response.ok) {
//               const data = await response.json();
              
//               if (data !== null) {
//                 return {
//                   displayName: data.displayName,
//                   id: data.id,
//                   jobTitle: data.jobTitle,
//                   mail: data.mail,
//                   mobilePhone: data.mobilePhone,
//                   token: accessToken,
//                 }
//               }
//             } else {
//                 throw new Error("User not found");
//             }
//         })
//         .catch((error) => {
//             throw new Error("User not found");
//         });
//       return user;
//     } catch (err) {
//         // userObject = {name: "", jobTitle:"", uid: ""};
//         console.log(err)
//     }
// };
//   const contextValues: AuthContextInterface = {
//     setLoading,
//     loading,
//     currentUser,
//     setUser,
//     user: getUser(),
//     setCurrentUser,
//     targetedUser,
//     setTargetedUser,
//     users,
//     setUsers,
//     accessToken,
//   }
//   return (
//   <AuthContext.Provider value={contextValues}>
//     {loading ? (
//       <div>
//         <LoadingSpinner />
//       </div>
//     ) : (
//       children
//     )}
//   </AuthContext.Provider>
//   )
// }
// export { AuthContextProvider as default, useAuthContext}
