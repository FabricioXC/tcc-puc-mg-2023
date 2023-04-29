import React, { useEffect } from "react";
import Router from "next/router";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import useWindowDimensions from "@/helper/get-dimensions";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { initFirebase } from "@/firebase/firebaseApp";
import { Auth } from "@/services/auth";

function Home() {
  initFirebase();
  const { height } = useWindowDimensions();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      Router.push("/dashboard");
    }
  }, [user]);
  const handleGoogleSignin = () => {
    Auth.googleSignIn(auth);
  };

  const handleFacebookSignin = () => {
    Auth.facebookSignIn(auth);
  };

  const handleSignout = (e: any) => {
    e.preventDefault();
    auth.signOut();
  };
  console.log("User: ", user);
  console.log("Loafing: ", loading);
  // console.log("height: ", height);
  return (
    <MDBContainer
      className="d-flex flex-column"
      style={{
        maxWidth: "500px",
        height: height,
        paddingTop: `${(height as number) * 0.2}px`,
      }}
    >
      <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" />
      <MDBInput wrapperClass="mb-4" label="Senha" id="form2" type="password" />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Salvar email e senha"
        />
        <a href="!#" onClick={handleSignout}>
          Esqueceu a sua senha?
        </a>
      </div>

      <MDBBtn className="mb-4">Logar</MDBBtn>

      <div className="text-center">
        {/* <p>
          Not a member? <a href="#!">Register</a>
        </p> */}
        <p>ou acesse com:</p>

        <div
          className="d-flex justify-content-between mx-auto"
          style={{ width: "40%" }}
        >
          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
            onClick={handleFacebookSignin}
          >
            <MDBIcon fab icon="facebook-f" size="sm" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="twitter" size="sm" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
            onClick={handleGoogleSignin}
          >
            <MDBIcon fab icon="google" size="sm" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="github" size="sm" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default Home;

// import Image from "next/image";
// import Head from "next/head";
// import { Inter } from "next/font/google";
// // import { useSession } from "next-auth/react";
// const inter = Inter({ subsets: ["latin"] });
// import Header from "../components/header/Header";
// import styles from "../styles/Home.module.css";
// import { initFirebase } from "@/firebase/firebaseApp";
// import { getAuth } from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { signIn } from "@/services/auth";
// import Router from "next/router";
// import React from "react";
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";

// function Home() {
//   return (
//     <MDBContainer fluid className="p-3 my-5">
//       <MDBRow>
//         <MDBCol col="10" md="6">
//           <img
//             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//             class="img-fluid"
//             alt="Phone image"
//           />
//         </MDBCol>

//         <MDBCol col="4" md="6">
//           <MDBInput
//             wrapperClass="mb-4"
//             label="Email address"
//             id="formControlLg"
//             type="email"
//             size="lg"
//           />
//           <MDBInput
//             wrapperClass="mb-4"
//             label="Password"
//             id="formControlLg"
//             type="password"
//             size="lg"
//           />

//           <div className="d-flex justify-content-between mx-4 mb-4">
//             <MDBCheckbox
//               name="flexCheck"
//               value=""
//               id="flexCheckDefault"
//               label="Remember me"
//             />
//             <a href="!#">Forgot password?</a>
//           </div>

//           <MDBBtn className="mb-4 w-100" size="lg">
//             Sign in
//           </MDBBtn>

//           <div className="divider d-flex align-items-center my-4">
//             <p className="text-center fw-bold mx-3 mb-0">OR</p>
//           </div>

//           <MDBBtn
//             className="mb-4 w-100"
//             size="lg"
//             style={{ backgroundColor: "#3b5998" }}
//           >
//             <MDBIcon fab icon="facebook-f" className="mx-2" />
//             Continue with facebook
//           </MDBBtn>

//           <MDBBtn
//             className="mb-4 w-100"
//             size="lg"
//             style={{ backgroundColor: "#55acee" }}
//           >
//             <MDBIcon fab icon="twitter" className="mx-2" />
//             Continue with twitter
//           </MDBBtn>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default Home;

// export default function Home() {
//   initFirebase();

//   const auth = getAuth();
//   const [user, loading] = useAuthState(auth);

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Nextjs | Next-Auth</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Header />

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Authentication in Next.js app using Next-Auth
//         </h1>
//         <div className={styles.user}>
//           {loading && <div className={styles.title}>Loading...</div>}
//           {user ? (
//             <>
//               <p style={{ marginBottom: "10px" }}>
//                 Welcome, {user?.displayName ?? user?.displayName}
//               </p>
//               <br />

//               <Image
//                 src={user.photoURL as string}
//                 alt=""
//                 className={styles.avatar}
//                 width={50}
//                 height={50}
//               />
//             </>
//           ) : (
//             <>
//               <p className={styles.title}>Please Sign in</p>
//               <p>Please, click on Sign in</p>
//             </>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }
