import {
  signInWithPopup,
  Auth as AuthF,
  GoogleAuthProvider,
  FacebookAuthProvider,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  linkWithCredential,
  AuthProvider,
} from "firebase/auth";
import * as firebase from "firebase/auth";
export const Auth = {
  async googleSignIn(
    auth: AuthF
    // provider: GoogleAuthProvider
  ) {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log("Result Google User: ", result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Message: ", errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  },

  async facebookSignIn(
    auth: AuthF
    // provider: GoogleAuthProvider
  ) {
    // const authw = firebase.getAuth
    // authw.
    const provider = new FacebookAuthProvider();
    console.log("AUTH: ", auth);
    console.log("Provider: ", provider);
    const result = await signInWithPopup(auth, provider)
      .then((result) => {
        console.log("AUTH: ", auth);
        console.log("Provider: ", provider);
        // The signed-in user info.
        const user = result.user;
        console.log("Result Facebook User: ", result.user);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Message: ", errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log("Email: ", email);

        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log("Credential: ", credential);
        // ...

        if (error.code === "auth/account-exists-with-different-credential") {
          // Step 2.
          // User's email already exists.
          // The pending Facebook credential.
          let pendingCred = credential;
          console.log("ERRORRR: ", error);
          // The provider account's email address.
          // var email = error.email;
          // Get sign-in methods for this email.
          fetchSignInMethodsForEmail(auth, email).then(function (
            methods: any[]
          ) {
            console.log("Passou aqui");
            // Step 3.
            // If the user has several sign-in methods,
            // the first method in the list will be the "recommended" method to use.
            console.log("METHODS: ", methods);
            if (methods[0] === "password") {
              // Asks the user their password.
              // In real scenario, you should handle this asynchronously.
              var password = "Hmb.FX@2021";
              // promptUserForPassword(); // TODO: implement promptUserForPassword.
              signInWithEmailAndPassword(auth, email, password)
                .then(function (result) {
                  // Step 4a.
                  return linkWithCredential(result.user, pendingCred as any);
                  // return result.user.linkWithCredential(pendingCred);
                })
                .then(function () {
                  console.log("Deu tudo certo");
                  // Facebook account successfully linked to the existing Firebase user.
                  // goToApp();
                });
              console.log("Passou aqui tb");
              return;
            }
            // All the other cases are external providers.
            // Construct provider object for that provider.
            // TODO: implement getProviderForProviderId.
            // var provider = { providerId: "google.com" } as AuthProvider;
            let provider = new GoogleAuthProvider();
            console.log("Passou nesse");
            // getProviderForProviderId(methods[0]);
            // At this point, you should let the user know that they already have an account
            // but with a different provider, and let them validate the fact they want to
            // sign in with this provider.
            // Sign in to provider. Note: browsers usually block popup triggered asynchronously,
            // so in real scenario you should ask the user to click on a "continue" button
            // that will trigger the signInWithPopup.
            signInWithPopup(auth, provider)
              .then(function (result) {
                console.log("Entrou nesse");
                // Remember that the user may have signed in with an account that has a different email
                // address than the first one. This can happen as Firebase doesn't control the provider's
                // sign in flow and the user is free to login using whichever account they own.
                // Step 4b.
                // Link to Facebook credential.
                // As we have access to the pending credential, we can directly call the link method.

                console.log("RESULT: ", result);
                console.log("Pending Cred: ", pendingCred);
                result.user;
                linkWithCredential(result.user, pendingCred as any).then(
                  function (usercred) {
                    console.log("User CRED: ", usercred);
                    // Facebook account successfully linked to the existing Firebase user.
                    // goToApp();
                  }
                );
                // .linkAndRetrieveDataWithCredential(pendingCred)
                //   .then(function (usercred) {
                //     // Facebook account successfully linked to the existing Firebase user.
                //     // goToApp();
                //   });
              })
              .catch((e) => {
                console.log("ERROR: ", e);
              });
          });
        }
      });
  },
};
// export const signInGoogle = async (
//   auth: Auth
//   // provider: GoogleAuthProvider
// ) => {
//   const provider = new GoogleAuthProvider();
//   const result = await signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential?.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       // IdP data available using getAdditionalUserInfo(result)
//       // ...
//       console.log("Result User: ", result.user);
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("Error Message: ", errorMessage);
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       // const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// };
