import NavbarComponent from "@/components/Navbar/Navbar";
import { ProfileData } from "@/models/pages/user/user-data";
import { MainContainer } from "@/styles/containers";

interface StandardLayoutProps {
  children: React.ReactNode;
}
const StandardLayout: React.FC<StandardLayoutProps> = ({ children }) => {
  const user = {
    id: 4,
    first_name: "John",
    last_name: "Doe",
    email: "testemail@teste.com",
    profile: "admin" as ProfileData,
  };

  return (
    <>
      <NavbarComponent user={user} />
      {/* <div className="p-6"> */}
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default StandardLayout;
