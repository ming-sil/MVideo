import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyle";

const Wrap = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const Loading = () => {
  return (
    <Wrap>
      <SpinnerCircular size={70} color={mainStyle.highlightColor} />
    </Wrap>
  );
};
