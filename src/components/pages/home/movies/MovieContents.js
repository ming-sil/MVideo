import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Scrollbar } from "swiper";
import "swiper/css/scrollbar";
import { imgUrl } from "../../../constant/constant";

import styled from "styled-components";
import { Loading } from "../../../Loading";
import { useState } from "react";
import { contentsApi } from "../../../../api";
import { mainStyle } from "../../../../styles/GlobalStyle";

const Wrap = styled.div`
  padding-left: 100px;
  margin: 15px 0;
  @media screen and (max-width: 500px) {
    padding-left: 30px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 90px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
    margin-top: 50px;
    margin-bottom: 10px;
  }
`;

const Con = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    img {
      width: 110%;
    }
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

const Poster = styled.div`
  width: 100%;
  height: 18vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    transition: 0.3s;
  }
  @media screen and (max-width: 500px) {
    height: 40vh;
  }
`;

const Name = styled.h3`
  font-size: 15px;
  font-weight: 100;
  margin: 5px 0;
`;

const PopupWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 997;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => props.apear};
`;

const PopupWrap = styled.div`
  width: 70%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 50%;
  /* position: relative; */
  transform: translateX(-50%);
  z-index: 998;
  overflow-y: scroll;
  @media screen and (max-width: 500px) {
    width: 95%;
    // position: relative;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 80px 0;
  position: relative;
  padding: 100px 0;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  @media screen and (max-width: 500px) {
    position: relative;
    border-radius: 30px;
    margin: 60px 0;
    padding: 60px 0;
    overflow: hidden;
  }
`;

const ExitBtn = styled.div`
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
  &:hover {
    svg {
      fill: ${mainStyle.highlightColor};
    }
  }
  @media screen and (max-width: 500px) {
    top: 20px;
    right: 20px;
  }
`;

const Section1 = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const TextWrap = styled.div`
  width: 50%;
  position: relative;
  padding-left: 60px;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 20px 15px;
  }
`;

const TitleWrap = styled.div`
  width: 600px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(60px);
  z-index: 99;
  @media screen and (max-width: 500px) {
    position: relative;
    transform: translate(0);
    margin-top: 200px;
  }
`;

const ShowName = styled.div`
  font-size: 60px;
  font-weight: 600;
  line-height: 70px;
  span {
    font-size: 35px;
  }
  margin-bottom: 5px;
  @media screen and (max-width: 500px) {
    font-size: 35px;
    line-height: 40px;
    span {
      font-size: 20px;
    }
  }
`;

const Tagline = styled.div`
  font-size: 25px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const DescWrap = styled.div`
  margin-top: 210px;
  width: 100%;
  @media screen and (max-width: 500px) {
    margin-top: 30px;
  }
`;

const Genres = styled.div`
  font-size: 20px;
  color: ${mainStyle.highlightColor};
  margin-bottom: 10px;
`;

const Runtime = styled.div`
  font-size: 20px;
  color: ${mainStyle.highlightColor};
  margin-bottom: 20px;
`;

const Overview = styled.div`
  font-size: 16px;
  font-weight: 100;
  opacity: 0.7;
  margin-bottom: 20px;
  line-height: 20px;
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

const LikeBtn = styled.div`
  margin-right: 20px;
  svg {
    width: 30px;
    stroke: ${mainStyle.mainColor};
    stroke-width: 20;
    fill: ${(props) => props.fill};
    transition: 0.3s;
  }
  cursor: pointer;
  &:hover {
    svg {
      stroke: ${mainStyle.highlightColor};
      fill: ${mainStyle.highlightColor};
    }
  }
`;

const TrailerBtn = styled.div`
  width: auto;
  height: 40px;
  padding: ${mainStyle.btnPadding};
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${mainStyle.btnRadius};
  cursor: pointer;

  svg {
    width: 15px;
    margin-right: 10px;
    fill: ${mainStyle.mainColor};
    transition: 0.3s;
  }
  margin-right: 20px;
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: ${mainStyle.highlightColor};
    svg {
      fill: ${mainStyle.highlightColor};
    }
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 120%;
    position: absolute;
    top: -60px;
    left: 8px;
    height: 40vh;
  }
`;

const MainImg = styled.div`
  position: absolute;
  top: 0;
  right: 60px;
  width: 90%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 500px) {
    border-radius: 0;
  }
`;

const Section2 = styled.div`
  margin-top: 200px;
  margin-bottom: 150px;
  @media screen and (max-width: 500px) {
    margin: 50px 0;
  }
`;

const Trailer = styled.iframe`
  width: 100%;
  height: 80vh;
  background-color: gray;
`;

const Section3 = styled.div`
  padding: 0 60px;
  @media screen and (max-width: 500px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 500px) {
    height: 50vh;
  }
`;

const Recommended = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  p {
    font-size: 16px;
  }
`;

const RecommendedContents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  row-gap: 80px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(33%, auto));
    row-gap: 25px;
  }
`;

const RecCon = styled.div`
  width: 95%;
`;

const RecImg = styled.div`
  width: 100%;
  height: 400px;
  @media screen and (max-width: 500px) {
    height: 180px;
  }
`;

const RecTitle = styled.h3`
  font-size: 15px;
  font-weight: 100;
  margin-top: 5px;
`;

export const MovieContents = ({ mvData, contentsClass }) => {
  const [mDetail, setmDetail] = useState();
  const [mTrailer, setmTrailer] = useState();
  const [mRecommend, setmRecommend] = useState();
  const [loading, setLoading] = useState(false);

  const [bool, setBool] = useState(true);
  const [popup, setPopup] = useState("none");
  const [likeBtn, setLikeBtn] = useState("none");

  const handlePopup = async (e) => {
    if (bool) {
      setLoading(true);
      setPopup("block");
      setBool(false);
      // 상세설명
      const mNum = e.target.parentNode.parentNode.getAttribute("data-num");
      const { data: mDetail } = await contentsApi.mDetail(mNum);
      setmDetail(mDetail);
      // 예고편
      const {
        data: { results: mTrailer },
      } = await contentsApi.mVideo(mNum);
      setmTrailer(mTrailer.length === 0 ? null : mTrailer[0].key);
      // 추천작
      const {
        data: { results: mRecommend },
      } = await contentsApi.mRecommend(mNum);
      setmRecommend(mRecommend);
      setLoading(false);
    } else if (!bool) {
      setPopup("none");
      setBool(true);
    }
  };
  // console.log("상세정보 :" + mDetail);
  // console.log("예고편 :" + mTrailer);
  // console.log("추천작 :" + mRecommend);

  const exit = () => {
    setPopup("none");
  };

  const like = () => {
    if (bool) {
      setLikeBtn(mainStyle.highlightColor);
      setBool(false);
    } else if (!bool) {
      setLikeBtn("none");
      setBool(true);
    }
  };

  const goToTrailer = () => {
    const position = document.querySelector(".popUp");
    const trailerPosition = document.querySelector(".trailerPosition");
    position.scrollTo({
      top: trailerPosition.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const params = {
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 7.3,
        spaceBetween: 15,
      },
    },
  };

  return (
    <Wrap>
      <Title>{contentsClass}</Title>

      <Swiper modules={[Scrollbar]} scrollbar={{ draggable: true }} {...params}>
        {mvData &&
          mvData.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Con
                onClick={handlePopup}
                className={movie.id}
                data-num={movie.id}
              >
                <Poster>
                  <img src={`${imgUrl}${movie.poster_path}`} />
                </Poster>
                <Name>{movie.title}</Name>
              </Con>
            </SwiperSlide>
          ))}
      </Swiper>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {mDetail && (
            <PopupWrapper apear={popup}>
              <PopupWrap className="popUp">
                <Container>
                  <ExitBtn onClick={exit}>
                    <svg viewBox="0 0 512 512">
                      <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
                    </svg>
                  </ExitBtn>

                  <Section1>
                    <TextWrap>
                      <TitleWrap>
                        <ShowName>
                          {mDetail.title}
                          <span>({mDetail.release_date.slice(0, 4)})</span>
                        </ShowName>
                        <Tagline>{mDetail && mDetail.tagline}</Tagline>
                      </TitleWrap>
                      <DescWrap>
                        <Genres>
                          {mDetail.genres.map((gen) => (
                            <span key={gen.id}>{" ▪" + gen.name}</span>
                          ))}
                        </Genres>
                        <Runtime>⏱{mDetail.runtime}분</Runtime>
                        <Overview>
                          {mDetail.overview ? mDetail.overview : null}
                        </Overview>
                        <BtnWrap>
                          <LikeBtn fill={likeBtn} onClick={like}>
                            <svg x="0px" y="0px" viewBox="0 0 526 512">
                              <path
                                d="M7,190.9v-5.8c0-69.9,50.5-129.5,119.4-141c44.7-7.6,92,7.3,124.6,39.9l12,12l11.1-12c33.5-32.6,79.9-47.5,125.5-39.9
c68.9,11.5,119.4,71.1,119.4,141v5.8c0,41.5-17.2,81.2-47.6,109.5L290.7,469.1c-7.5,7-17.4,10.9-27.7,10.9
c-10.3,0-20.2-3.9-27.7-10.9L54.6,300.4C24.2,272.1,7,232.4,7,190.9L7,190.9z"
                              />
                            </svg>
                          </LikeBtn>
                          {mTrailer ? (
                            <TrailerBtn onClick={goToTrailer}>
                              <svg viewBox="0 0 384 512">
                                <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                              </svg>
                              예고편 재생
                            </TrailerBtn>
                          ) : null}
                        </BtnWrap>
                      </DescWrap>
                    </TextWrap>

                    <ImgWrap>
                      <MainImg
                        style={{
                          background: `url(${
                            mDetail.backdrop_path
                              ? `${imgUrl}${mDetail.backdrop_path}`
                              : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                          }) no-repeat center / cover`,
                        }}
                      />
                    </ImgWrap>
                  </Section1>

                  <Section2 className="trailerPosition">
                    {mTrailer ? (
                      <Trailer
                        src={`https://www.youtube.com/embed/${mTrailer}`}
                        allowfullscreen
                      ></Trailer>
                    ) : null}
                  </Section2>

                  <Section3>
                    <Recommended>
                      <h3>비슷한 콘텐츠</h3>
                    </Recommended>
                    <RecommendedContents>
                      {mRecommend &&
                        mRecommend.map((rec) => (
                          <RecCon key={rec.id}>
                            <RecImg
                              style={{
                                background: `url(${
                                  rec.poster_path
                                    ? `${imgUrl}${rec.poster_path}`
                                    : "https://i.pinimg.com/564x/74/cc/8a/74cc8a346b601afc543014d29c6e3aa0.jpg"
                                }) no-repeat center / cover`,
                              }}
                            />
                            <RecTitle>{rec.title}</RecTitle>
                          </RecCon>
                        ))}
                    </RecommendedContents>
                  </Section3>
                </Container>
              </PopupWrap>
            </PopupWrapper>
          )}
        </>
      )}
    </Wrap>
  );
};
