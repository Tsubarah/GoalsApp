import { useEffect, useState } from "react";
import { useAuthContext } from "../Contexts/AuthContext";
import useUsers from "../services/useUsers";

export const AuthPage = () => {
  const { accessToken, currentUser } = useAuthContext();
  const { getProfilePhotoUrl, getUserDetails, getUsers } = useUsers();
  const [photoUrl, setPhotoUrl] = useState<string>();
  // const userName = getUserName();

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    async function getPhoto(accessToken: string) {
      setPhotoUrl(await getProfilePhotoUrl(accessToken));
    }
    getPhoto(accessToken);
    getUserDetails(accessToken)
    getUsers(accessToken)
  }, [accessToken]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Auth...</h1>
      {currentUser ? <h2>Welcome {currentUser.displayName}</h2> : null}
      {photoUrl ? <img src={photoUrl} alt={currentUser?.displayName} /> : null}
    </div>
  );
};
