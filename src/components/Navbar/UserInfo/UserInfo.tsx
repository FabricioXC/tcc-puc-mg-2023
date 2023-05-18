import useWindowDimensions from "@/helper/get-dimensions";
import { NavbarFactory } from "@/models/navbar/factory";
import { NavbarMenuOptions } from "@/models/navbar/navbarData";
import { UserData } from "@/models/pages/user/user-data";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  ImageContainer,
  Letter,
  LetterContainer,
  MainContainer,
  Message,
  MessageContainer,
  Name,
} from "./styles";

interface UserInfoProps {
  user: UserData;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const firstLetter = user?.first_name?.charAt(0);
  const { width, height } = useWindowDimensions();
  return (
    <>
      {user && user && (
        <MainContainer>
          <MessageContainer>
            {/* <Message>Bem-vindo(a),</Message> */}
            <Name>{user.first_name}</Name>
          </MessageContainer>
          <ImageContainer>
            <LetterContainer>
              <Letter>{firstLetter && firstLetter ? firstLetter : ""}</Letter>
            </LetterContainer>
          </ImageContainer>
        </MainContainer>
      )}
    </>
  );
};

export default UserInfo;
