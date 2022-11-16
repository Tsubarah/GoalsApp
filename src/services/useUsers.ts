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

                            // console.log("data from fetch:", data)
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

        const options = {
            method: "GET",
            headers: headers,
        };

        // let users: IUser[] | undefined
        try {
            await fetch("https://graph.microsoft.com/v1.0/users", options)
                .then(async (response) => {
                    if (response != null && response.ok) {
                        const data = await response.json();
                        if (data !== null) {
                            console.log('data1', data)
                            setUsers(data.value)

                            if (data['@odata.nextLink']) {
                                const newFetchUrI = data['@odata.nextLink']

                                await fetch(`${newFetchUrI}`, options)
                                .then(async (response) => {
                                    if (response != null && response.ok) {
                                        const newData = await response.json();
                                        if (newData !== null) {
                                            console.log('data1', data.value)
                                            console.log('data2 - newData:', newData.value)
                                            setUsers([...data.value, ...newData.value])
                                        }
                                    } else {
                                        throw new Error("Users not found");
                                    }
                                })
                                .catch((error) => {
                                    throw new Error("Users not found");
                                });
                            }
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
            await fetch(`https://graph.microsoft.com/v1.0/users/${id}/photo/$value`,options)
                .then((response) => {
                    if (response != null && response.ok) {
                        return response.blob().then((data) => {
                            if (data !== null) {
                                // window.URL = window.URL || window.webkitURL; 
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

    return {
        getProfilePhotoUrl,
        getUserDetails,
        getUsers,
        getUsersPhotoUrl
    };
};

export default useUsers;
