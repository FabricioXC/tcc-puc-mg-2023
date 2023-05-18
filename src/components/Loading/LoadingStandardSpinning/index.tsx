import React, { ReactElement } from "react";
import { TailSpin } from "react-loader-spinner";
import { LoadingArea } from "../styles";

interface LoadingSpinProps {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  visible?: boolean;
}

const LoadingSpin: React.FC<LoadingSpinProps> = ({
  color = "#40CEEF",
  size = 1,
  top,
  left,
  right,
  bottom,
  visible = true,
  ...props
}) => {
  return (
    <LoadingArea top={top} left={left} right={right} bottom={bottom} {...props}>
      <TailSpin
        color={color}
        height={`${80 * size}px`}
        width={`${80 * size}px`}
        visible={visible}
      />
    </LoadingArea>
  );
};

export default LoadingSpin;
