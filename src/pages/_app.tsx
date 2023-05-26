import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { initFirebase } from "@/firebase/firebaseApp";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  initFirebase();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  console.log("User: ", user);
  // console.log("Userrrrrrrrrrrrr: ", user?.displayName);
  // console.log("Router: ", router.pathname);
  useEffect(() => {
    if (router.pathname !== "/" && !user && !loading) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname, user]);

  return (
    <>
      <ThemeProvider>
        <Head>
          <title>TCC-PUC-MG</title>
          <meta name="description" content="TCC-PUC-MG" />
        </Head>

        {(router.pathname === "/" || user) && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
}

// import { SessionProvider } from "next-auth/react";
// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }: AppProps) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }
