import styled from "styled-components";

const Wrap = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  div {
    width: 95%;
    height: 100px;
    border-top: 1px solid #555;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 100;
    letter-spacing: 0;
  }
`;

export const Footer = () => {
  return (
    <Wrap>
      <div>© Ming-sil {new Date().getFullYear()}</div>
    </Wrap>
  );
};
