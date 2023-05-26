import Image from "next/image";
import {
  GenericButtonProps,
  GoogleButtonContainer,
  GoogleLogoContainer,
} from "../GenButton/styles";

const GoogleButton: React.FC<GenericButtonProps> = (props) => {
  return (
    <GoogleButtonContainer onClick={props.onClick}>
      <GoogleLogoContainer>
        <Image
          src={"/icons/buttons/gLogo.svg"}
          width={18}
          height={18}
          layout="fixed"
          alt="Logo"
        />
        {props.children}
      </GoogleLogoContainer>
    </GoogleButtonContainer>
  );
};

export default GoogleButton;
