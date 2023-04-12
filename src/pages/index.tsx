import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
// import { useSession } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import { initFirebase } from "@/firebase/firebaseApp";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { signIn } from "@/services/auth";
export default function Home() {
  initFirebase();
  // console.log(app);
  // const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  // const handleSignIn = () => {
  //   signIn(auth, provider);
  // };

  // const signIn = async () => {
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

  // const { data: session, status } = useSession();

  // const loading = status === "loading";
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs | Next-Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Authentication in Next.js app using Next-Auth
        </h1>
        <div className={styles.user}>
          {loading && <div className={styles.title}>Loading...</div>}
          {user ? (
            <>
              <p style={{ marginBottom: "10px" }}>
                Welcome, {user?.displayName ?? user?.displayName}
              </p>
              <br />

              <Image
                src={user.photoURL as string}
                alt=""
                className={styles.avatar}
                width={50}
                height={50}
              />
              {/* <img
                src={user.photoURL}
                alt=""
                className={styles.avatar}
                width={"50px"}
                height={"50px"}
              /> */}

              {/* <button onClick={() => auth.signOut()}>Sign Out</button> */}
            </>
          ) : (
            <>
              <p className={styles.title}>Please Sign in</p>
              <p>Please, click on Sign in</p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
