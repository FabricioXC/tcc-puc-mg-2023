import { NavbarToogleIcon } from "@/assets/icons/navbar";
import { Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarOptions from "./NavbarOptions/NavbarOptions";
import { UserData } from "@/models/pages/user/user-data";
import UserInfo from "./UserInfo/UserInfo";
import useWindowDimensions from "@/helper/get-dimensions";
import { navbarChangeBreakpoint } from "@/helper/functions";
import { Name } from "./UserInfo/styles";

interface NavbarComponentProps {
  user?: UserData;
}

const NavbarComponent: React.FC<NavbarComponentProps> = ({ user }) => {
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
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            // maxWidth: "200px",
            // width: "40%",
            columnGap: "16px",
            // border: "1px solid red",
          }}
        >
          {small && <UserInfo user={user as UserData} />}
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
        {/* </Container> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavbarOptions profile={"master"} />

            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            {/* <NavDropdown title="Cadastros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <div style={{ position: "fixed", right: "25px", top: "15%" }}>
            {small && <Name>{user?.first_name as string}</Name>}
          </div> */}
        </Navbar.Collapse>
        {!small && <UserInfo user={user as UserData} />}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
