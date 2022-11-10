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
  const [accessToken, setAccessToken] = useState<string | undefined>();

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
              console.log('response', response)
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

  return {  accessToken, user };
};
