import NavbarComponent from "@/components/Navbar/Navbar";
import { ProfileData } from "@/models/pages/data";
import { MainContainer } from "@/styles/containers";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

interface StandardLayoutProps {
  children: React.ReactNode;
}
const StandardLayout: React.FC<StandardLayoutProps> = ({ children }) => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  console.log(user);
  const userInfo = {
    id: 4,
    first_name: user?.displayName?.split(" ")[0] || "Usuário",
    last_name: user?.displayName?.split(" ")[1] || "",
    email: user?.email || "",
    profile: "admin" as ProfileData,
  };
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {})
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <>
      <NavbarComponent user={userInfo} signOut={handleLogout} />
      {/* <div className="p-6"> */}
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default StandardLayout;
