import { useAuthContext } from "../Contexts/AuthContext";

const useUsers = () => {
  const { setUsers, currentUser } = useAuthContext();

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
      await fetch(`https://graph.microsoft.com/v1.0/users/${id}/photo/$value`, options)
        .then(async (response) => {
          if (response != null && response.ok) {
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
              // console.log('groups', data);
            }
          } else {
            throw new Error("data not found");
          }
        })
        .catch((error) => {
          throw new Error("data not found");
        });
    } catch (err) {

    }
    // return imageUrl;
  };


  let managerOf: { teamId: string; }[];
  const getManagersGroup = async (accessToken: string) => {
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
        "https://graph.microsoft.com/v1.0/users/99f714b1-4b6f-4a38-99f2-ece0e4043919/transitiveMemberOf/microsoft.graph.group?$count=true&$expand=owners($select=id,city,companyName,department,displayName,givenName,surname,jobTitle,mail,mailNickname,mobilePhone,userPrincipalName)",
        options
      )
        .then(async (response) => {
          if (response != null && response.ok) {
            // console.log("response",response)
            const data = await response.json();
            if (data !== null) {
              if (!currentUser) {
                return
              }
              console.log('My Groups', data);

              const teams = ["A-Team", "Atlas", "enigma", "Core Team"]
              // eslint-disable-next-line array-callback-return
              managerOf = data.value.map((group: {
                displayName: string; owners: any[]; id: any;
                // eslint-disable-next-line array-callback-return
              }) => {
                const team = teams.find(name => name === group.displayName)
                const isOwner = group.owners.find(item => item.jobTitle === "Team Manager" && item.displayName === "Pierre Aupeix");

                if (team && isOwner) return {name: team, teamId: group.id};
              }).filter((id: undefined | string) => id !== undefined);

              console.log('managerOf', managerOf)

              getGroupMembers(accessToken, managerOf[0].teamId)

              return managerOf
            }
          } else {
            throw new Error("data not found");
          }
        })
        .catch((error) => {
          throw new Error("data not found");
        });
    } catch (err) {
    }
    return managerOf
  };

  const getGroupMembers = async (accessToken: string, groupID: string) => {
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
        `https://graph.microsoft.com/v1.0/groups/${groupID}/members`,
        options
      )
        .then(async (response) => {
          if (response != null && response.ok) {
            // console.log("response",response)
            const data = await response.json();
            if (data !== null) {
              if (!currentUser) {
                return
              }
              console.log('My Groups members:', data);
              setUsers(data.value)

            }
          } else {
            throw new Error("data not found");
          }
        })
        .catch((error) => {
          throw new Error("data not found");
        });
    } catch (err) {
    }
  };


  return {
    getProfilePhotoUrl,
    getUsers,
    getUsersPhotoUrl,
    getGroups,
    getManagersGroup,
  };
};

export default useUsers;
