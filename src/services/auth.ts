import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { loginRequest } from "../authConfig";
// import store from "../store/store";

type AzureUser = {
  name: string;
  email: string;
};

export const useAuth = () => {
  const { instance, accounts } = useMsal();
  const [user, setUser] = useState<AzureUser>();
  const [accessToken, setAccessToken] = useState<string>();

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
              if (response.account) {
                instance.setActiveAccount(response.account);

                // store.setIdToken(response.idToken);
                // store.setAccessToken(response.accessToken);
                // store.setUsername(response.account?.name);
                setAccessToken(response.accessToken);
                setUser({
                  name: response.account?.name ?? "",
                  email: response.account?.username ?? "",
                });
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
      await fetch("https://graph.microsoft.com/v1.0/me/photo/$value", options)
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

  return { getUserName, getProfilePhotoUrl, accessToken };
};
