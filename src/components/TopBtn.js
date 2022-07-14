import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyle";

const Top = styled.div`
  font-size: 35px;
  color: ${mainStyle.highlightColor};
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
`;

export const TopBtn = () => {
  const handleScroll = () => {
    console.log("클릭함");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Top OnClick={handleScroll}>
      <FontAwesomeIcon icon={faChevronCircleUp} />
    </Top>
  );
};
