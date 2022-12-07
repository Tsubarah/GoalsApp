import { useAuthContext } from "../Contexts/AuthContext"

const baseUrl = "https://random-data-api.com/api/v2/"

const useUsers = () => {
  // const { setUsers } = useAuthContext()

  // const getProfilePhotoUrl = async (accessToken: string) => {
  //   if (!accessToken) {
  //     return ""
  //   }
  //   const headers = new Headers()
  //   const bearer = `Bearer ${accessToken}`
  //   headers.append("Authorization", bearer)
  //   headers.append("Content-Type", "image/jpeg")

  //   const options = {
  //     method: "GET",
  //     headers: headers,
  //   }

  //   let imageUrl = ""
  //   try {
  //     await fetch("https://graph.microsoft.com/v1.0/me/photo/$value", options)
  //       .then((response) => {
  //         if (response != null && response.ok) {
  //           return response.blob().then((data) => {
  //             if (data !== null) {
  //               window.URL = window.URL || window.webkitURL
  //               imageUrl = window.URL.createObjectURL(data)
  //             }
  //           })
  //         } else {
  //           throw new Error("Profile image not found")
  //         }
  //       })
  //       .catch((error) => {
  //         throw new Error("Profile image not found")
  //       })
  //   } catch (err) {
  //     imageUrl = ""
  //   }
  //   return imageUrl
  // }

  // const getUsers = async () => {
  //   try {
  //     await fetch(`${baseUrl}users?size=7`)
  //       .then(async (response) => {
  //         if (response != null && response.ok) {
  //           const data = await response.json()
  //           if (data !== null) {
  //             setUsers(data)
  //           }
  //         } else {
  //           throw new Error("Users not found")
  //         }
  //       })
  //       .catch((error) => {
  //         throw new Error("Users not found")
  //       })
  //   } catch (err) {}
  // }

  // const getUsersPhotoUrl = async (accessToken: string, id: string) => {
  //   if (!accessToken) {
  //     return ""
  //   }
  //   const headers = new Headers()
  //   const bearer = `Bearer ${accessToken}`
  //   headers.append("Authorization", bearer)
  //   headers.append("Content-Type", "image/jpeg")

  //   const options = {
  //     method: "GET",
  //     headers: headers,
  //   }

  //   let imageUrl = ""
  //   try {
  //     await fetch(
  //       `https://graph.microsoft.com/v1.0/users/${id}/photo/$value`,
  //       options
  //     )
  //       .then(async (response) => {
  //         if (response != null && response.ok) {
  //           const data = await response.blob()
  //           if (data !== null) {
  //             // window.URL = window.URL || window.webkitURL;
  //             window.URL = window.URL || window.webkitURL
  //             imageUrl = window.URL.createObjectURL(data)
  //           }
  //         } else {
  //           throw new Error("Profile image not found")
  //         }
  //       })
  //       .catch((error) => {
  //         throw new Error("Profile image not found")
  //       })
  //   } catch (err) {
  //     imageUrl = ""
  //   }
  //   return imageUrl
  // }

  // const getGroups = async (accessToken: string) => {
  //   if (!accessToken) {
  //     return ""
  //   }
  //   const headers = new Headers()
  //   const bearer = `Bearer ${accessToken}`
  //   headers.append("Authorization", bearer)
  //   headers.append("Content-Type", "json")

  //   const options = {
  //     method: "GET",
  //     headers: headers,
  //   }

  //   try {
  //     await fetch(
  //       "https://graph.microsoft.com/v1.0/groups?$select=id,description,displayName,mail,mailNickname&$expand=owners($select=id,city,companyName,department,displayName,givenName,surname,jobTitle,mail,mailNickname,mobilePhone,userPrincipalName)",
  //       options
  //     )
  //       .then(async (response) => {
  //         if (response != null && response.ok) {
  //           // console.log("response",response)
  //           const data = await response.json()
  //           if (data !== null) {
  //             // console.log('groups', data);
  //           }
  //         } else {
  //           throw new Error("data not found")
  //         }
  //       })
  //       .catch((error) => {
  //         throw new Error("data not found")
  //       })
  //   } catch (err) {}
  // }

  // let managerOf: { teamId: string }[]
  // const getManagersGroup = async (accessToken: string) => {
  //   if (!accessToken) {
  //     return ""
  //   }
  //   const headers = new Headers()
  //   const bearer = `Bearer ${accessToken}`
  //   headers.append("Authorization", bearer)
  //   headers.append("Content-Type", "json")

  //   const options = {
  //     method: "GET",
  //     headers: headers,
  //   }

  //   try {
  //     await fetch(
  //       "https://graph.microsoft.com/v1.0/users/3f9b30de-ba17-4aa0-9dc1-93f680463543/transitiveMemberOf/microsoft.graph.group?$count=true&$expand=owners($select=id,city,companyName,department,displayName,givenName,surname,jobTitle,mail,mailNickname,mobilePhone,userPrincipalName)",
  //       options
  //     )
  //       .then(async (response) => {
  //         if (response != null && response.ok) {
  //           // console.log("response",response)
  //           const data = await response.json()
  //           if (data !== null) {
  //             //   if (!currentUser) {
  //             //     return
  //             //   }
  //             console.log("My Groups", data)

  //             const teams = ["A-Team", "Atlas", "enigma", "Core Team"]
  //             // eslint-disable-next-line array-callback-return
  //             managerOf = data.value
  //               .map(
  //                 (group: {
  //                   displayName: string
  //                   owners: any[]
  //                   id: any
  //                   // eslint-disable-next-line array-callback-return
  //                 }) => {
  //                   const team = teams.find(
  //                     (name) => name === group.displayName
  //                   )
  //                   const isOwner = group.owners.find(
  //                     (item) =>
  //                       item.jobTitle === "Team Manager" &&
  //                       item.displayName === "Stefan Cumtell"
  //                   )

  //                   if (team && isOwner) return { name: team, teamId: group.id }
  //                 }
  //               )
  //               .filter((id: undefined | string) => id !== undefined)

  //             console.log("managerOf", managerOf)

  //             getGroupMembers(accessToken, managerOf[0].teamId)

  //             return managerOf
  //           }
  //         } else {
  //           throw new Error("data not found")
  //         }
  //       })
  //       .catch((error) => {
  //         throw new Error("data not found")
  //       })
  //   } catch (err) {}
  //   return managerOf
  // }

  // const getGroupMembers = async (accessToken: string, groupID: string) => {
  //   if (!accessToken) {
  //     return ""
  //   }
  //   const headers = new Headers()
  //   const bearer = `Bearer ${accessToken}`
  //   headers.append("Authorization", bearer)
  //   headers.append("Content-Type", "json")

  //   const options = {
  //     method: "GET",
  //     headers: headers,
  //   }

  //   try {
  //     await fetch(
  //       `https://graph.microsoft.com/v1.0/groups/${groupID}/members`,
  //       options
  //     )
  //       .then(async (response) => {
  //         if (response != null && response.ok) {
  //           // console.log("response",response)
  //           const data = await response.json()
  //           if (data !== null) {
  //             //   if (!currentUser) {
  //             //     return
  //             //   }
  //             console.log("My Groups members:", data)
  //             setUsers(data.value)
  //           }
  //         } else {
  //           throw new Error("data not found")
  //         }
  //       })
  //       .catch((error) => {
  //         throw new Error("data not found")
  //       })
  //   } catch (err) {}
  // }

  const postSendMail = async (accessToken: string, mail: string) => {
    let myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${accessToken}`)

    let raw = JSON.stringify({
      message: {
        subject: "GoalsNow - Have you reached your goals?",
        body: {
          contentType: "Text",
          content:
            "This is a friendly reminder from your manager to take look at your goals. Go to GoalsNow!",
        },
        toRecipients: [
          {
            emailAddress: {
              address: mail,
            },
          },
        ],
      },
      saveToSentItems: "true",
    })
    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    fetch("https://graph.microsoft.com/v1.0/me/sendMail", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error))
  }

  return {
    // getProfilePhotoUrl,
    // getUsers,
    // getCurrentUser,
    // getUsersPhotoUrl,
    // getGroups,
    // getManagersGroup,
    postSendMail,
  }
}

export default useUsers
