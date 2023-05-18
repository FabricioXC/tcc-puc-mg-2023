import NavbarComponent from "@/components/Navbar/Navbar";
import { MainContainer } from "@/styles/containers";
export default function StrandardLayout({ children }) {
  const user = {
    first_name: "John",
    last_name: "Doe",
    email: "testemail@teste.com",
  };

  return (
    <>
      <NavbarComponent user={user} />
      {/* <div className="p-6"> */}
      <MainContainer>{children}</MainContainer>
    </>
  );
}
