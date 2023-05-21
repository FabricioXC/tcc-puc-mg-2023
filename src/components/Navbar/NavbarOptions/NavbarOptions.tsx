import { NavbarFactory } from "@/models/navbar/factory";
import { NavbarMenuOptions } from "@/models/navbar/navbarData";
import { ProfileData } from "@/models/pages/data";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

interface NavbarOptionsProps {
  profile: ProfileData;
}

const NavbarOptions: React.FC<NavbarOptionsProps> = ({ profile }) => {
  const navMenuOptions: NavbarMenuOptions = NavbarFactory.makeNavbarMenuOptions(
    profile
  ) as NavbarMenuOptions;
  return (
    <>
      {navMenuOptions?.dropdown && navMenuOptions?.dropdown && (
        <>
          <NavDropdown
            title={navMenuOptions.dropdown.title}
            id="basic-nav-dropdown"
          >
            <>
              {navMenuOptions.dropdown.options.map((option, i) => {
                return (
                  <NavDropdown.Item key={i} href={option.path}>
                    {option.title}
                  </NavDropdown.Item>
                );
              })}

              {/* <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
            </>
          </NavDropdown>
        </>
      )}

      {navMenuOptions?.options && navMenuOptions?.options && (
        <>
          {navMenuOptions.options.map((option, i) => {
            return (
              <Nav.Link key={i} href={option.path}>
                {option.title}
              </Nav.Link>
            );
          })}
        </>
      )}
    </>
  );
};

export default NavbarOptions;
