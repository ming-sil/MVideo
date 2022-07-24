import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { contentsApi } from "../../../api";
import { mainStyle } from "../../../styles/GlobalStyle";
import { imgUrl } from "../../constant/constant";
import { Loading } from "../../Loading";

const SearchWrap = styled.form`
  width: 100%;
  margin: 150px 0;
  padding: ${mainStyle.padding};
  position: relative;
  font-size: 30px;
  button {
    all: unset;
    position: absolute;
    top: 50%;
    right: 100px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    margin-top: 100px;
    margin-bottom: 60px;
    padding: ${mainStyle.moPadding};
    button {
      right: 7%;
    }
  }
`;

const Term = styled.input`
  all: unset;
  width: 100%;
  border: 1px solid #888;
  border-radius: 10px;
  padding: 10px;
  font-size: 30px;
  transition: 0.3s;
  &::placeholder {
    color: #555;
  }
`;

const ConWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  margin-top: 150px;
  padding: ${mainStyle.padding};
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
    margin-top: 50px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const WordWrap = styled.form`
  width: 60%;
  margin: 100px 0;
  font-size: 45px;
  color: rgba(255, 255, 255, 0.7);
  padding: ${mainStyle.padding};
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: ${mainStyle.moPadding};
    font-size: 30px;
    margin: 50px 0;
  }
`;

const SearchWord = styled.h1`
  font-size: 100px;
  color: ${mainStyle.mainColor};
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    font-size: 50px;
    margin-bottom: 5px;
  }
`;

const Con = styled.div`
  /* width: 200px; */
`;

const Bg = styled.div`
  height: 300px;
  @media screen and (max-width: 500px) {
    height: 200px;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  margin-top: 10px;
`;

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [loading, setLoading] = useState();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const searchContents = async () => {
    const { search: term } = getValues();
    // console.log(term);

    setLoading(true);

    try {
      // console.log(await contentsApi.search(term));
      const {
        data: { results: mv },
      } = await contentsApi.msearch(term);
      const {
        data: { results: tv },
      } = await contentsApi.tvsearch(term);

      if (mv.length && tv.length <= 0) {
        setError("result", { message: "없는 컨텐츠입니다." });
      } else {
        setSearchTerm(mv && tv);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(errors);
  // const inputValue = document.querySelector("input").value;
  const { search: term } = getValues();

  console.log(getValues().search);

  return (
    <>
      <SearchWrap onSubmit={handleSubmit(searchContents)}>
        <Term
          {...register("search", {
            required: "내용은 필수입니다.",
            onChange() {
              clearErrors("result");
            },
          })}
          type="text"
          placeholder="검색어를 입력하세요"
        ></Term>
        <button>🔍</button>
        {errors?.search?.message}
        {errors?.result?.message}
      </SearchWrap>
      {loading ? (
        <Loading />
      ) : (
        <>
          {searchTerm && (
            <>
              <WordWrap>
                <SearchWord>"{getValues().search}"</SearchWord>에 대한 검색
                결과입니다.
              </WordWrap>

              <ConWrap>
                {searchTerm.map((term) => (
                  <Con key={term.id}>
                    <Bg
                      style={{
                        background: `url(${
                          term.poster_path
                            ? `${imgUrl}${term.poster_path}`
                            : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                        }) no-repeat center / cover`,
                      }}
                    />
                    <Title>{term.title || term.name}</Title>
                  </Con>
                ))}
              </ConWrap>
            </>
          )}
        </>
      )}
    </>
  );
};
