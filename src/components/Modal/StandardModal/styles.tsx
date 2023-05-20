import styled from "styled-components";
// import { cores, tamanhos } from '../../styles/variables';

interface MsgIconContainer {
  msg?: string;
  icon?: any;
}

export const MessageIconContainer = styled.div<MsgIconContainer>`
  width: 100%;
  height: ${(props) =>
    props.msg && props.icon
      ? "146px"
      : props.msg || props.icon
      ? "86px"
      : "86px"};
  display: flex;
  flex-direction: ${(props) =>
    props.msg && props.icon
      ? "column-reverse"
      : (props.msg || props.icon) && "row"};
  justify-content: center;
  align-items: "center";
  border-bottom: 1px solid #ecf0f3;
  border-top: ${(props) =>
    props.msg && props.icon
      ? "1px solid #ECF0F3"
      : props.msg
      ? "1px solid #ECF0F3"
      : "none"};
`;

export const Message = styled.div`
  padding: 0 24px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 19px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  /* Color / Neutral / Heavy / Light */

  color: #666666;
`;

export const IconContainer = styled.div`
  height: 100%;
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
