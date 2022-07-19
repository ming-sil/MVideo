import styled from "styled-components";
import { mainStyle } from "../../../styles/GlobalStyle";

const SearchWrap = styled.div`
  width: 60%;
  margin: 200px 0;
  font-size: 45px;
  color: rgba(255, 255, 255, 0.7);
  padding: ${mainStyle.padding};
`;

const SearchWord = styled.h1`
  font-size: 100px;
  color: ${mainStyle.mainColor};
  margin-bottom: 30px;
`;

export const Search = () => {
  return (
    <>
      <SearchWrap>
        <SearchWord>{"안녕"}</SearchWord>에 대한 검색 결과입니다.
      </SearchWrap>
    </>
  );
};
