import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { mainStyle } from "../styles/GlobalStyle";

const Wrap = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${mainStyle.padding};
  position: fixed;
  z-index: 999;
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
  button {
    all: unset;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-10px);
  }
`;

const Search = styled.input`
  all: unset;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  padding: 5px 10px;
  font-size: 13px;
  display: none;
`;

export const Header = () => {
  return (
    <Wrap>
      <LogoMenuWrap>
        <Link to="/">
          <Logo>MVideo</Logo>
        </Link>

        <MenuWrap>
          <Link to="/">
            <Menu>홈</Menu>
          </Link>
          <Link to="/movies">
            <Menu>영화</Menu>
          </Link>
          <Link to="/tvprograms">
            <Menu>TV 프로그램</Menu>
          </Link>
          <Link to="/liked">
            <Menu>내가 찜한 콘텐츠</Menu>
          </Link>
        </MenuWrap>
      </LogoMenuWrap>
      <SearchWrap>
        <Search type="text" placeholder="검색어를 입력하세요"></Search>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </SearchWrap>
    </Wrap>
  );
};
