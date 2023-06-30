import { Auth } from "firebase/auth";

export const saveToken = (auth: Auth) => {
  if (auth?.currentUser) {
    auth?.currentUser
      ?.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        localStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        console.log("Error: ", error);
      });
  }
};
