// import { useSession, signIn, signOut } from "next-auth/react";
import { Auth } from "@/services/auth";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Header() {
  // const { data: session } = useSession();

  const auth = getAuth();
  auth.useDeviceLanguage();
  const [user] = useAuthState(auth);
  // const provider = new GoogleAuthProvider();
  const handleSignin = (e: any) => {
    e.preventDefault();
    Auth.googleSignIn(auth);
  };

  const handleSignout = (e: any) => {
    e.preventDefault();
    auth.signOut();
  };

  return (
    <div className="header">
      {user ? (
        <a href="#" onClick={handleSignout} className="btn-signin">
          <button>Sign out</button>
        </a>
      ) : (
        <a href="#" onClick={handleSignin} className="btn-signin">
          <button>Sign in</button>
        </a>
      )}
    </div>
  );
}
