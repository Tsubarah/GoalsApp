import {  PublicClientApplication } from "@azure/msal-browser";

let auth = {
  clientId: "3d444f78-10b0-4dca-9667-f8847df74a0b",
  validIssuer:
    "https://login.microsoftonline.com/cd20e4c9-f82c-4d3e-9224-90f2bc4be1a0/v2.0",
  authority: "https://login.microsoftonline.com/geshdo.com",
  redirectUri: "https://goalsnow.geshdo.dev", // https://goalsnow.geshdo.dev in dev
  postLogoutRedirectUri: "https://goalsnow.geshdo.dev",
};

export const msalConfig = {
  auth: {
    clientId: auth.clientId,
    authority: auth.authority,
    validIssuer: auth.validIssuer,
    redirectUri: auth.redirectUri,
    postLogoutRedirectUri: auth.postLogoutRedirectUri,
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};

const MSALobj = new PublicClientApplication(msalConfig);

export const logoutReq = {
  account: MSALobj.getAccountByHomeId(auth.clientId),
}