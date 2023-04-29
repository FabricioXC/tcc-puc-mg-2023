import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
