import styled, { css } from "styled-components";

interface LoadingAreaProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export const LoadingArea = styled.div<LoadingAreaProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: rgba(0, 0, 0, 0.05);
  ${({ top }) => top && `padding-top: ${top};`}
  ${({ left }) => left && `padding-left: ${left};`}
  ${({ right }) => right && `padding-right: ${right};`}
  ${({ bottom }) => bottom && `padding-bottom: ${bottom};`}
`;
