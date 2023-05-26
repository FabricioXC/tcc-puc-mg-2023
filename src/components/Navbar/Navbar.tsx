import { NavbarToogleIcon } from "@/assets/icons/navbar";
import { Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarOptions from "./NavbarOptions/NavbarOptions";
import { ProfileData, UserData } from "@/models/pages/data";
import UserInfo from "./UserInfo/UserInfo";
import useWindowDimensions from "@/helper/get-dimensions";
import { navbarChangeBreakpoint } from "@/helper/functions";
import { Name } from "./UserInfo/styles";
import { CleanButton } from "../Button/GenButton/styles";

interface NavbarComponentProps {
  user?: UserData;
  signOut?: () => void;
}

const NavbarComponent: React.FC<NavbarComponentProps> = ({ user, signOut }) => {
  const { width, height } = useWindowDimensions();
  const size = navbarChangeBreakpoint(width as number);
  const small = size === "small";

  return (
    <Navbar
      bg="light"
      expand="md"
      className="text-center fixed-top navbar-light bg-white"
    >
      <Container fluid>
        <Navbar.Brand href="/dashboard">TCC PUC-MG</Navbar.Brand>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",

            columnGap: "16px",
          }}
        >
          {small && (width as number) > 350 && (
            <UserInfo user={user as UserData} small={small} />
          )}
          <Navbar.Toggle
            className="border-0"
            aria-controls={`offcanvasNavbar-expand-md`}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                // width: "100%",
              }}
            >
              {NavbarToogleIcon}
            </div>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavbarOptions profile={"master" as unknown as ProfileData} />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {small && (width as number) >= 350 && (
                <CleanButton onClick={signOut}>{"Sair"}</CleanButton>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
        {!small && (
          <div
            style={{ display: "flex", flexDirection: "row", columnGap: "12px" }}
          >
            <>
              <UserInfo user={user as UserData} small={small} />
              <CleanButton onClick={signOut}>{"Sair"}</CleanButton>
            </>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
