import { useEffect, useState } from "react";
import { useAuth } from "../services/auth";

export const AuthPage = () => {
  const { accessToken, getUserName, getProfilePhotoUrl } = useAuth();
  const [photoUrl, setPhotoUrl] = useState<string>();
  const userName = getUserName();

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    async function getPhoto(accessToken: string) {
      setPhotoUrl(await getProfilePhotoUrl(accessToken));
    }
    getPhoto(accessToken);
  }, [accessToken]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Auth...</h1>
      {userName ? <h2>Welcome {userName.name}</h2> : null}
      {photoUrl ? <img src={photoUrl} alt={userName?.name} /> : null}
    </div>
  );
};
