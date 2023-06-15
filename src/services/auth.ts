import {
  signInWithPopup,
  Auth as AuthF,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import * as firebase from "firebase/auth";
export const Auth = {
  async googleSignIn(auth: AuthF, HandleIsLoading: any) {
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
      })
      .finally(() => {
        HandleIsLoading;
      });
  },
  async emailSignUp(
    auth: AuthF,
    email: string,
    password: string,
    HandleIsLoading: any,
    setShowStandardModal: any,
    setStandardModalInfo: any,
    handleFirstRegister: any
  ) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("User SugnUP: ", user);
        console.log("User Credential: ", userCredential);
        console.log("User Email: ", user?.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Message: ", errorMessage);
        console.log("Error Code: ", errorCode);
        if (errorCode === "auth/email-already-in-use") {
          setStandardModalInfo({
            title: "Erro ao criar usuário",
            msg: "O e-mail informado já está em uso.",
            // icon: "error",
          });
          setShowStandardModal(true);
        }
        // ..
      })
      .finally(() => {
        HandleIsLoading();
      });
  },

  async emailSignIn(
    auth: AuthF,
    email: string,
    password: string,
    HandleIsLoading: any,
    setShowStandardModal: any,
    setStandardModalInfo: any,
    handleFirstRegister: any
  ) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // console.log("User SugnIn: ", user);
        // console.log("User Credential: ", userCredential);
        // console.log("User Email: ", user?.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log("Error Message: ", errorMessage);
        // console.log("Error Code: ", errorCode);
        if (
          errorCode === "auth/wrong-password" ||
          errorCode === "auth/user-not-found"
        ) {
          setStandardModalInfo({
            title: "Erro ao realizar login",
            msg: "Email ou senha incorretos",
            // type: "error",
          });
          setShowStandardModal(true);
        }
      })
      .finally(() => {
        HandleIsLoading;
      });
  },

  async resetPassword(
    auth: AuthF,
    email: string,
    HandleIsLoading: any,
    setShowStandardModal: any,
    setStandardModalInfo: any,
    btnAction: any
  ) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        setStandardModalInfo({
          title: "Resset de Senha",
          msg: "Siga as instruçoes enviadas ao seu email para resetar sua senha",
          // type: "success",
          btnAction: btnAction,
        });
        console.log("Password reset email sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Message: ", errorMessage);
        setStandardModalInfo({
          title: "Resset de Senha",
          msg: "Ocorreu um erro ao enviar o email de reset de senha",
          // type: "error",
        });

        // ..
      })
      .finally(() => {
        HandleIsLoading;
        setShowStandardModal(true);
      });
  },
};
