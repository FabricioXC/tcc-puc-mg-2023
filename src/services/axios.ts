import axios from "axios";

import { getAuth } from "firebase/auth";
export function getApiClient() {
  const api = axios.create({
    baseURL: "/api",
  });
  const auth = getAuth();
  // api.interceptors.request.use((config) => {
  //   return config;
  // });
  if (auth?.currentUser) {
    auth?.currentUser
      ?.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        console.log("TOKEN: ", idToken);
        // Send token to your backend via HTTPS
        // ...
        if (idToken) {
          api.defaults.headers.options.Authorization = `${idToken}`;
        }
      })
      .catch(function (error) {});
  }
  // if (token) {
  //   api.defaults.headers["Authorization"] = `${token}`;
  // }
  return api;
}

// export function getApiClientLogin(ctx?: any) {
//   // const { "nextauth-token": token } = parseCookies(ctx);

//   const api = axios.create({
//     baseURL: baseUrls.AUTH,
//   });

//   api.interceptors.request.use((config) => {
//     return config;
//   });

//   // if (token) {
//   //   api.defaults.headers["Authorization"] = `Bearer ${token}`;
//   // }
//   return api;
// }
