import { useAuthContext } from "../Contexts/AuthContext";
import { IUser } from '../typings/User'


const useUsers = () => {
    const { setCurrentUser, setUsers } = useAuthContext();

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

        const options = {
            method: "GET",
            headers: headers,
        };

        try {
            await fetch("https://graph.microsoft.com/v1.0/me", options)
                .then(async (response) => {
                    if (response != null && response.ok) {
                        const data = await response.json();
                        if (data !== null) {

                            console.log("Me", data)
                            setCurrentUser({
                                displayName: data.displayName,
                                id: data.id,
                                jobTitle: data.jobTitle,
                                mail: data.mail,
                                mobilePhone: data.mobilePhone,
                            })
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
    };

    const getUsers = async (accessToken: string) => {
        if (!accessToken) {
            return "";
        }
        const headers = new Headers();
        const bearer = `Bearer ${accessToken}`;
        headers.append("Authorization", bearer);
        headers.append("Content-Type", "json");
        headers.append("ConsistencyLevel", "eventual")

        const options = {
            method: "GET",
            headers: headers,
        };

        // let users: IUser[] | undefined
        try {
            await fetch("https://graph.microsoft.com/v1.0/users?$count=true&$orderby=displayName&$filter=((endsWith(mail,'@geshdo.com'))and (accountEnabled eq true))", options)
                .then(async (response) => {
                    if (response != null && response.ok) {
                        const data = await response.json();
                        if (data !== null) {
                            // window.URL = window.URL || window.webkitURL;
                            // usersUrl = window.URL.createObjectURL(data);

                            console.log('users', data)
                            setUsers(data.value)
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
        // return users;
    };

    const getUsersPhotoUrl = async (accessToken: string, id: string) => {
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
                `https://graph.microsoft.com/v1.0/users/${id}/photo/$value`,
                options
            )
                .then(async (response) => {
                    if (response != null && response.ok) {
                        // console.log("response",response)
                        const data = await response.blob();
                      if (data !== null) {
                        // window.URL = window.URL || window.webkitURL;
                        window.URL = window.URL || window.webkitURL;
                        imageUrl = window.URL.createObjectURL(data);
                      }
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

    const getGroups = async (accessToken: string) => {
        if (!accessToken) {
            return "";
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
            await fetch(
                "https://graph.microsoft.com/v1.0/groups?$select=id,description,displayName,mail,mailNickname&$expand=owners($select=id,city,companyName,department,displayName,givenName,surname,jobTitle,mail,mailNickname,mobilePhone,userPrincipalName)",
                options
            )
                .then(async (response) => {
                    if (response != null && response.ok) {
                        // console.log("response",response)
                        const data = await response.json();
                      if (data !== null) {
                        console.log('groups', data);
                      }
                    } else {
                        throw new Error("data not found");
                    }
                })
                .catch((error) => {
                    throw new Error("data not found");
                });
        } catch (err) {
            // imageUrl = "";
            /***
             * 1. Check if currentUser's jobTitle is team-manager
             * 2. If yes, get all groups that user is a member of
             * 3. map over groups and check if owners has a jobTitle === team-manager, if yes, check if currentUser.displayName === owners displayName
             * 4. Get that groups ID
             */
            // group 43 - A-team (97b37a8d-8b5b-4fac-bf58-dca0942f8e8a)
            // https://graph.microsoft.com/v1.0/me/transitiveMemberOf/microsoft.graph.group?$count=true
            // /groups/${groupID}/members
        }
        // return imageUrl;
    };


    return {
        getUserDetails,
        getProfilePhotoUrl,
        getUsers,
        getUsersPhotoUrl,
        getGroups,
    };
};

export default useUsers;
