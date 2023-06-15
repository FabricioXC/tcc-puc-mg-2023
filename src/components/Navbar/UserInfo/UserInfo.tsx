import useWindowDimensions from "@/helper/get-dimensions";
import { NavbarFactory } from "@/models/navbar/factory";
import { NavbarMenuOptions } from "@/models/navbar/navbarData";
import { UserData } from "@/models/pages/data";
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
import Image from "next/image";

interface UserInfoProps {
  user: UserData;
  small?: boolean;
}

const UserInfo: React.FC<UserInfoProps> = ({ user, small }) => {
  const firstLetter = user?.first_name?.charAt(0);
  const { width, height } = useWindowDimensions();
  // user.photoUrl = "";
  return (
    <>
      {user && user && (
        <MainContainer>
          <MessageContainer>
            {!small && <Message>Bem-vindo(a),</Message>}
            <Name>{user.first_name}</Name>
          </MessageContainer>
          <ImageContainer photoUrl={user?.photoUrl}>
            {user.photoUrl && user.photoUrl ? (
              <Image src={user.photoUrl} width={36} height={36} alt="Foto" />
            ) : (
              <LetterContainer>
                <Letter>{firstLetter && firstLetter ? firstLetter : ""}</Letter>
              </LetterContainer>
            )}
          </ImageContainer>
        </MainContainer>
      )}
    </>
  );
};

export default UserInfo;
