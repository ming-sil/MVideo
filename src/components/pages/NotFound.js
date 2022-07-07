import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyle";

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.div`
  width: 25%;
`;

const Btn = styled.div`
  height: ${mainStyle.btnHeight};
  border-radius: ${mainStyle.btnRadius};
  background-color: ${mainStyle.highlightColor};
  padding: ${mainStyle.btnPadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${mainStyle.btnFontSize};
  font-weight: ${mainStyle.btnFontWeight};
  margin-top: 50px;
  svg {
    margin-left: 15px;
    font-size: 15px;
  }
`;

export const NotFound = () => {
  return (
    <Wrap>
      <Image>
        <img
          src={require("../../img/404notFound.svg").default}
          alt="404Image"
        />
      </Image>
      <Link to="/">
        <Btn>
          홈으로 돌아가기
          <FontAwesomeIcon icon={faPlay} />
        </Btn>
      </Link>
    </Wrap>
  );
};
