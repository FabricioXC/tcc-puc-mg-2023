import styled from "styled-components";
import { colors, fonts, sizes } from "../../../styles/variables";

export interface GenericButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

export const GenericButton = styled.button<GenericButtonProps>`
  background-color: ${(props) =>
    props.disabled ? colors.pinkLight : colors.pinkDark};
  border-radius: 6.72px;
  border: none;
  padding: 16px 32px;
  gap: 10px;

  font-family: ${fonts.secondaryFont}, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${sizes.extraSmall};
  line-height: 100%;

  text-align: right;
  text-transform: uppercase;
  color: ${colors.white};

  flex: none;
  order: 0;
  flex-grow: 0;

  cursor: pointer;
`;

export const GenericCancelButton = styled.button<GenericButtonProps>`
  background-color: ${(props) =>
    props.disabled ? colors.pinkLight : colors.pinkLightest};
  border-radius: 6.72px;
  border: none;
  padding: 16px 32px;
  gap: 10px;

  font-family: ${fonts.secondaryFont}, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${sizes.extraSmall};
  line-height: 100%;

  text-align: right;
  text-transform: uppercase;
  color: ${colors.pinkDark};

  flex: none;
  order: 0;
  flex-grow: 0;

  cursor: pointer;
`;

export const GoogleButtonContainer = styled.button<GenericButtonProps>`
  margin-right: 24px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: ${colors.white};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.24);
  border-radius: 6.72px;
  border: none;

  cursor: pointer;

  left: 17.36%;
  right: 8.33%;
  top: 30%;
  bottom: 33.46%;

  font-family: ${fonts.mainFont}, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: ${sizes.extraSmall};
  line-height: 19px;

  display: flex;
  align-items: center;
  letter-spacing: 0.21875px;
  /* text-transform: uppercase; */
  width: 288px;
  height: 50px;
  padding-left: 15px;

  color: ${colors.gray};
`;

export const GoogleLogoContainer = styled.div`
  margin-top: 5px;
  margin-right: 15px;
  display: flex;
  column-gap: 10px;
`;

export const CleanButton = styled.button<GenericButtonProps>`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 6px 16px;
  gap: 10px;
  background-color: "none";

  border: 1px solid #e6e6e6;
  border-radius: 6.72px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: #666666;

  cursor: pointer;
`;
