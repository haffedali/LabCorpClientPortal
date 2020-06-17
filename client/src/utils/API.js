import { adalApiFetch, adalTokenFetch } from "../adalConfig";

import axios from "axios";

// import {authenticate} from '../normalAdal';

export const testCall = () => {
  //     const headers = { Authorization: `Bearer ${adalTokenFetch()}` };

  //   const testUrl = "https://sswilbobraggins.api.crm.dynamics.com/api/data/v9.1/WhoAmI";

  //   const testTenantUrl = '58bf51ec-ca22-48d9-ad93-e9d44309b27a'
  //   adalApiFetch(axios,testUrl)
  //     .then((r) => r.json())
  //     .catch(e => console.log(e))
  //     .then((r) => console.log(r))
  //     .catch((e) => console.log(e));
  var config = {
    method: "get",
    url: "https://sswilbobraggins.api.crm.dynamics.com/api/data/v9.1/WhoAmI",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlNzWnNCTmhaY0YzUTlTNHRycFFCVEJ5TlJSSSIsImtpZCI6IlNzWnNCTmhaY0YzUTlTNHRycFFCVEJ5TlJSSSJ9.eyJhdWQiOiJodHRwczovL3Nzd2lsYm9icmFnZ2lucy5hcGkuY3JtLmR5bmFtaWNzLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzU4YmY1MWVjLWNhMjItNDhkOS1hZDkzLWU5ZDQ0MzA5YjI3YS8iLCJpYXQiOjE1OTE5OTczNTUsIm5iZiI6MTU5MTk5NzM1NSwiZXhwIjoxNTkyMDAxMjU1LCJhY3IiOiIxIiwiYWlvIjoiQVNRQTIvOFBBQUFBekx3VlNDRXpNOCtrSjdheW1HbVRvWlhGdUNycExMV3dUaDM4R3l1R3B0bz0iLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiM2FlZWRmNmQtNGUwZC00NWE5LTk1ZWUtMTQ5MjAyY2M4ZWU5IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNYXJjaGVrIiwiZ2l2ZW5fbmFtZSI6IldpbGwiLCJpcGFkZHIiOiI3Mi4yMDMuMjEwLjEzIiwibmFtZSI6IldpbGwgTWFyY2hlayIsIm9pZCI6ImQ2OTg4MmQwLTk1ODYtNDAzMy1hYmQ4LWE2ZWRjZDgxZGQ0ZCIsInB1aWQiOiIxMDAzMjAwMEI1QUJGMDE3Iiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiWjdVbHFDVDFNVXg2UWlNbVlYZS12dE5CeVpYTlBzMXREWGlQc051QnFkNCIsInRpZCI6IjU4YmY1MWVjLWNhMjItNDhkOS1hZDkzLWU5ZDQ0MzA5YjI3YSIsInVuaXF1ZV9uYW1lIjoid2lsYm9Ac3N3aWxib2JyYWdnaW5zLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6IndpbGJvQHNzd2lsYm9icmFnZ2lucy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJkZjc4YVEtcnVrSzB6a0pyeGl0RUFBIiwidmVyIjoiMS4wIn0.SYfU2qdVtXnuKhb-5_2Z9O_EaBNR2OTWiYUW_qvaQgiRPVJkTut2rBRxsCBy5wU62JAQ5DRxN9IvgFwmBY60OOVDGusNjSpQyramjZEb4drtkgeZM_bDPlr6MmmFi-2dy06E5kTsc9rQIbkuau99UBR_5XkSDFUA8A4kTSE2BMP0g5w2W4pi8V5OlCoVc3mQ3CBT8Iftx34Xg0cQ0dgw-uYr7w1LgmaLv8_e4weXhYI3lWRX0p19cWA11QfqueqAcPVqEgC_I9jRLaZB9vY_Lhh4m3rpuzazpTTSb3xG5BMYSVpJ0UQj65cY8SWWrUta4LmOkgpBLM5w6RVYWJJ6pQ",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

function generateRequestString(tenant, clientId) {
  const string = `https://cors-anywhere.herokuapp.com/https://login.microsoftonline.com/${tenant}/oauth2/authorize?
client_id=${clientId}
&response_type=token
&redirect_uri=http%3A%2F%2Flocalhost%3A3000
&response_mode=fragment
&scope=openid
&state=12345`;
  return string;
}

export const testRequestString = () => {
  let string = generateRequestString(
    "sswilbobraggins.onmicrosoft.com",
    "3aeedf6d-4e0d-45a9-95ee-149202cc8ee9"
  );
  axios
    .get(string)
    .then((r) => console.log(r))
    .catch((e) => console.log(e));
};
