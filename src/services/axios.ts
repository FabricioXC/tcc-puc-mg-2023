import axios from "axios";

// import { getAuth } from "firebase/auth";
export const getApiClient = () => {
  const api = axios.create({
    baseURL: "/api",
  });
  const token = localStorage.getItem("token");
  // const auth = token ? `Bearer ${token}` : "";
  api.defaults.headers["Authorization"] = `${token}`;
  // config.headers.common['Authorization'] = auth;
  // return config;
  // const auth = getAuth();
  // // api.interceptors.request.use((config) => {
  // //   return config;
  // // });
  // if (auth?.currentUser) {
  //   auth?.currentUser
  //     ?.getIdToken(/* forceRefresh */ true)
  //     .then(function (idToken) {
  //       // localStorage.setItem("token", idToken);

  //       console.log("TOKEN: ", idToken);
  //       // Send token to your backend via HTTPS
  //       // ...
  //       if (idToken) {
  //         console.log("IDToken2: ", idToken);
  //         api.defaults.headers["Authorization"] = `${idToken}`;
  //         // api.defaults.headers.options.Authorization = `${idToken}`;
  //       }
  //       console.log("API: ", api.defaults.headers);
  //     })
  //     .catch(function (error) {});
  // }
  // if (token) {
  //   api.defaults.headers["Authorization"] = `${token}`;
  // }
  return api;
};

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
