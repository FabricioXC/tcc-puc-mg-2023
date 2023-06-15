import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: flex-end; */
  /* width: 184px; */
  height: 35px;
  /* width: 300px; */
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-end;
  /* width: 132px; */
  height: 20px;
  margin-right: 16px;
  column-gap: 6px;
  /* width: 100%; */
`;

export const Message = styled.div`
  margin: 0%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  text-align: right;
  color: #959cb6;
  /* margin-right: 4px; */
`;

export const Name = styled.div`
  /* margin: 0%; */
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  /* width: fit-content; */
  /* text-align: right; */
  color: #6c7293;
  text-transform: capitalize;
`;

interface ImageContainerProps {
  photoUrl?: string;
}
export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ photoUrl }) => (photoUrl ? "40px" : "36px")};
  height: ${({ photoUrl }) => (photoUrl ? "40px" : "36px")};
  background: #d7f9ef;
  border-radius: 4px;
  border-color: ${({ photoUrl }) => (photoUrl ? "#d7f9ef" : "none")};
  border-width: ${({ photoUrl }) => (photoUrl ? "1px" : "0px")};
`;

export const LetterContainer = styled.div`
  width: 10.29px;
  height: 26px;
`;
export const Letter = styled.div`
  margin: 0%;
  width: 10.29px;
  height: 26px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 26px;
  color: #0bb783;
  text-transform: uppercase;
`;
