import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { mainStyle } from "../styles/GlobalStyle";
import { useState } from "react";

const Wrap = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${mainStyle.padding};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: ${(props) => props.bgColor};
  transition: 0.3s;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;

const LogoMenuWrap = styled.div`
  display: flex;
  align-items: center;
`;

const MenuWrap = styled.ul`
  display: flex;
  a {
    font-size: 16px;
    font-weight: 400;
    margin-right: 30px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Logo = styled.div`
  font-size: 25px;
  font-weight: 800;
  margin-right: 50px;
  color: ${mainStyle.highlightColor};
`;

const Menu = styled.li``;

const SearchWrap = styled.form`
  display: flex;
  position: relative;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MoMenu = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const MoMenuWrap = styled.ul`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  border-radius: 30px;
  position: absolute;
  top: 0;
  left: 0;
  left: ${(props) => props.leftResult};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
  li {
    font-size: 40px;
    font-weight: 700;
    margin: 50px;
    &:nth-child(1) {
      font-size: 24px;
      margin: 0;
    }
  }
`;

const MenuBtn = styled.div`
  font-size: 24px;
`;

const CloseBtn = styled.li`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 999;
  svg {
    transition: 0.3s;
    fill: ${mainStyle.mainColor};
  }
`;

export const Header = () => {
  const [bg, setBg] = useState("transparent");
  const [left, setLeft] = useState("100%");

  const handleScroll = () => {
    const sct = window.pageYOffset;
    if (100 < sct) {
      setBg("#1d1d1d");
    } else {
      setBg("transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Wrap bgColor={bg}>
      <LogoMenuWrap>
        <Link to="/">
          <Logo>MVideo</Logo>
        </Link>

        <MenuWrap>
          <Link to="/movies">
            <Menu>영화</Menu>
          </Link>
          <Link to="/tvprograms">
            <Menu>TV 프로그램</Menu>
          </Link>
        </MenuWrap>
      </LogoMenuWrap>
      <SearchWrap>
        <Link to="/search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </SearchWrap>

      <MoMenu>
        <MenuBtn onClick={() => setLeft(0)}>
          <FontAwesomeIcon icon={faBars} />
        </MenuBtn>
        <MoMenuWrap leftResult={left}>
          <CloseBtn onClick={() => setLeft("100%")}>
            <svg viewBox="0 0 512 512">
              <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
            </svg>
          </CloseBtn>
          <li>
            <Link to={"/movies"}>🎬영화</Link>
          </li>
          <li>
            <Link to={"/tvprograms"}>📺TV프로그램</Link>
          </li>

          <li>
            <Link to={"/search"}>🔍Search</Link>
          </li>
        </MoMenuWrap>
      </MoMenu>
    </Wrap>
  );
};
