import { useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../../../../styles/GlobalStyle";

const Wrap = styled.div`
  width: 70%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 998;
  overflow-y: scroll;
  position: fixed;
  display: ${"(props) => props."};
`;

const PopUp = styled.div`
  width: 100%;
  margin: 80px 0;
  position: relative;
  padding: 100px 0;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`;

const ExitBtn = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  svg {
    transition: 0.3s;
    fill: ${mainStyle.mainColor};
  }
  &:hover {
    svg {
      fill: ${mainStyle.highlightColor};
    }
  }
`;

const Section1 = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const TextWrap = styled.div`
  width: 50%;
  position: relative;
  padding-left: 60px;
`;

const TitleWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(60px);
  z-index: 99;
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
  line-height: 70px;
  span {
    font-size: 35px;
  }
  margin-bottom: 5px;
`;

const Tagline = styled.div`
  font-size: 25px;
`;

const DescWrap = styled.div`
  margin-top: 210px;
  width: 100%;
`;

const Genres = styled.div`
  font-size: 23px;
  color: ${mainStyle.highlightColor};
  margin-bottom: 10px;
`;

const Runtime = styled.div`
  font-size: 23px;
  color: ${mainStyle.highlightColor};
  margin-bottom: 20px;
`;

const Overview = styled.div`
  font-size: 16px;
  font-weight: 100;
  opacity: 0.6;
  margin-bottom: 20px;
  line-height: 20px;
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

const LikeBtn = styled.div`
  svg {
    width: 30px;

    stroke: ${mainStyle.mainColor};
    stroke-width: 20;
    fill: none;
    transition: 0.3s;
  }
  margin-right: 20px;
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
`;

const MainImg = styled.div`
  position: absolute;
  top: 0;
  right: 60px;
  width: 90%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Thumbnails = styled.div`
  width: 70%;
  height: 30%;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
`;

const Thumbnail = styled.div`
  width: 32%;

  background-color: rgba(0, 0, 0, 0.5);
`;

const Section2 = styled.div`
  margin-top: 200px;
  margin-bottom: 150px;
`;

const Trailer = styled.div`
  width: 100%;
  height: 80vh;
  background-color: gray;
`;

const Section3 = styled.div`
  padding: 0 60px;
`;

const Recommended = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
  }
`;

const RecommendedContents = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Mov = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    height: 380px;
    background-color: salmon;
  }
  h5 {
    font-size: 15px;
    font-weight: 100;
    margin-top: 5px;
  }
`;

export const DetailPopup = ({ mDetail, tvDetail, mTrailer, tvTrailer }) => {
  const exit = () => {
    console.log("클릭=>닫기");
  };

  const like = () => {
    console.log("클릭=>좋아요");
  };

  const goToTrailer = () => {
    console.log("클릭=>스크롤");
  };

  return (
    <Wrap>
      <PopUp>
        <ExitBtn onClick={exit}>
          <svg viewBox="0 0 512 512">
            <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
          </svg>
        </ExitBtn>
        <Section1>
          <TextWrap>
            <TitleWrap>
              <Title>
                {(mDetail && mDetail.title) || (tvDetail && tvDetail.name)}
                <span>
                  (
                  {(mDetail && mDetail.release_date) ||
                    (tvDetail && tvDetail.release_date)}
                  )
                </span>
              </Title>
              <Tagline>
                {(mDetail && mDetail.tagline) || (tvDetail && tvDetail.tagline)}
              </Tagline>
            </TitleWrap>
            <DescWrap>
              <Genres>판타지 | 액션 | 모험 </Genres>
              <Runtime>⏱126분</Runtime>
              <Overview>
                "아메리카(소치틀 고메즈)는 어느 날 멀티버스 사이를 오갈 수 있는
                힘에 눈을 뜨지만 완전히 제어하지 못한다. 정체불명의 악마가
                아메리카를 죽이려 하자 다른 우주의 스트레인지가 이를 막아보지만
                결국 살해당한다. 우여곡절 끝에 우리가 알고 있는 우주로 넘어온
                아메리카는 어벤져스 멤버인 닥터 스트레인지(베네딕트 컴버배치)의
                도움과 보호를 받는다. 닥터 스트레인지는 웨스트뷰 사건 이후
                잠적한 완다(엘리자베스 올슨)에게 도움을 청하지만 곧바로 그녀가
                사건의 진정한 흑막, 스칼렛 위치임이 드러난다. 스칼렛 위치는
                자신의 원하는 멀티버스로 가기 위해 아메리카의 힘을 흡수하려
                한다. 닥터 스트레인지와 아메리카는 압도적인 힘을 지닌 스칼렛
                위치를 피해 또 한번 다른 멀티버스로 도망치지만 그의 끈질긴
                추격을 받는다."
              </Overview>
              <BtnWrap>
                <LikeBtn onClick={like}>
                  <svg x="0px" y="0px" viewBox="0 0 526 512">
                    <path
                      d="M7,190.9v-5.8c0-69.9,50.5-129.5,119.4-141c44.7-7.6,92,7.3,124.6,39.9l12,12l11.1-12c33.5-32.6,79.9-47.5,125.5-39.9
	c68.9,11.5,119.4,71.1,119.4,141v5.8c0,41.5-17.2,81.2-47.6,109.5L290.7,469.1c-7.5,7-17.4,10.9-27.7,10.9
	c-10.3,0-20.2-3.9-27.7-10.9L54.6,300.4C24.2,272.1,7,232.4,7,190.9L7,190.9z"
                    />
                  </svg>
                </LikeBtn>
                <TrailerBtn onClick={goToTrailer}>
                  <svg viewBox="0 0 384 512">
                    <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                  </svg>
                  예고편 재생
                </TrailerBtn>
              </BtnWrap>
            </DescWrap>
          </TextWrap>

          <ImgWrap>
            <MainImg></MainImg>
            <Thumbnails>
              <Thumbnail />
              <Thumbnail />
              <Thumbnail />
            </Thumbnails>
          </ImgWrap>
        </Section1>

        <Section2>
          <Trailer></Trailer>
        </Section2>

        <Section3>
          <Recommended>
            <h3>비슷한 콘텐츠</h3>
            <p>더보기 ▸</p>
          </Recommended>
          <RecommendedContents>
            <Mov>
              <div />
              <h5>영화제목</h5>
            </Mov>
            <Mov>
              <div />
              <h5>영화제목</h5>
            </Mov>
            <Mov>
              <div />
              <h5>영화제목</h5>
            </Mov>
            <Mov>
              <div />
              <h5>영화제목</h5>
            </Mov>
          </RecommendedContents>
        </Section3>
      </PopUp>
    </Wrap>
  );
};
