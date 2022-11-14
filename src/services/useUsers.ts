import { useAuthContext } from "../Contexts/AuthContext";
import { useAuth } from "../services/auth";
import { IUser } from '../typings/User'

type AzureUser = {
	name: string;
	email: string;
  };

const useUsers = () => {
    const { setCurrentUser } = useAuthContext();
	const { user } = useAuth();

    const getUserName = (): AzureUser | undefined => user;

    const getProfilePhotoUrl = async (accessToken: string) => {
        if (!accessToken) {
            return "";
        }
        const headers = new Headers();
        const bearer = `Bearer ${accessToken}`;
        headers.append("Authorization", bearer);
        headers.append("Content-Type", "image/jpeg");

        const options = {
            method: "GET",
            headers: headers,
        };

        let imageUrl = "";
        try {
            await fetch(
                "https://graph.microsoft.com/v1.0/me/photo/$value",
                options
            )
                .then((response) => {
                    if (response != null && response.ok) {
                        return response.blob().then((data) => {
                            if (data !== null) {
                                window.URL = window.URL || window.webkitURL;
                                imageUrl = window.URL.createObjectURL(data);
                            }
                        });
                    } else {
                        throw new Error("Profile image not found");
                    }
                })
                .catch((error) => {
                    throw new Error("Profile image not found");
                });
        } catch (err) {
            imageUrl = "";
        }
        return imageUrl;
    };

    const getUserDetails = async (accessToken: string) : Promise<IUser | undefined>=>  {
        if (!accessToken) {
            return undefined;
        }
        const headers = new Headers();
        const bearer = `Bearer ${accessToken}`;
        headers.append("Authorization", bearer);
        headers.append("Content-Type", "json");
        // console.log("accessToken", accessToken);
        const options = {
            method: "GET",
            headers: headers,
        };

        // let user : IUser | undefined 
        try {
            await fetch("https://graph.microsoft.com/v1.0/me", options)
                .then(async (response) => {
                    if (response != null && response.ok) {
                        const data = await response.json();
                        if (data !== null) {

                            // console.log("data from fetch:", data)
                            setCurrentUser({
                                displayName: data.displayName,
                                id: data.id,
                                jobTitle: data.jobTitle,
                                mail: data.mail,
                                mobilePhone: data.mobilePhone
                            })
                            // user = {
                            //     displayName: data.displayName,
                            //     id: data.id,
                            //     jobTitle: data.jobTitle,
                            //     mail: data.mail,
                            //     mobilePhone: data.mobilePhone
                            // }
                        }
                    } else {
                        throw new Error("User not found");
                    }
                })
                .catch((error) => {
                    throw new Error("User not found");
                });
        } catch (err) {
            // userObject = {name: "", jobTitle:"", uid: ""};
            console.log(err)
        }
        // console.log("Return Object", user)
        // return user
    };

    const getUsers = async (accessToken: string) => {
        if (!accessToken) {
            return "";
        }
        const headers = new Headers();
        const bearer = `Bearer ${accessToken}`;
        headers.append("Authorization", bearer);
        headers.append("Content-Type", "json");
        // console.log("accessToken", accessToken);
        const options = {
            method: "GET",
            headers: headers,
        };

        let users: [IUser] | undefined 
        try {
            await fetch("https://graph.microsoft.com/v1.0/users", options)
                .then(async (response) => {
                    if (response != null && response.ok) {
                        const data = await response.json();
                        if (data !== null) {
                            console.log("response", data);
                            // window.URL = window.URL || window.webkitURL;
                            // usersUrl = window.URL.createObjectURL(data);
                            users = data.value
                            console.log(users)
                        }
                    } else {
                        throw new Error("Users not found");
                    }
                })
                .catch((error) => {
                    throw new Error("Users not found");
                });
        } catch (err) {
            // users = [];
        }
        return users;
    };

    return {
        getUserName,
        getProfilePhotoUrl,
        getUserDetails,
        getUsers,
    };
};

export default useUsers;
