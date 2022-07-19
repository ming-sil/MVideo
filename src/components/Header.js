import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { mainStyle } from "../styles/GlobalStyle";

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
    cursor: pointer;
  }
  &:hover input {
    opacity: 1;
  }
`;

const Search = styled.input`
  all: unset;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  padding: 5px 10px;
  font-size: 13px;
  opacity: 0;
  transition: 0.3s;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
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
