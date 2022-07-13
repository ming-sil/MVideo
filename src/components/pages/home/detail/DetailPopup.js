import styled from "styled-components";
import { mainStyle } from "../../../../styles/GlobalStyle";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
`;

const PopUp = styled.div`
  width: 80%;
  backdrop-filter: blur(10px);
  position: relative;
  padding: 100px 0;
  border-radius: 50px;
  background-color: darkblue;
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

const Section1 = styled.div``;

const TextWrap = styled.div``;

const Title = styled.div``;

const Tagline = styled.div``;

const Genres = styled.div``;

const Runtime = styled.div``;

const Overview = styled.div``;

const BtnWrap = styled.div``;

const LikeBtn = styled.div``;

const TrailerBtn = styled.div``;

const ImgWrap = styled.div``;

const MainImg = styled.div``;

const Thumbnails = styled.div``;

const Thumbnail = styled.div``;

const Section2 = styled.div``;

const Trailer = styled.div``;

const Section3 = styled.div``;

const Recommended = styled.div``;

const RecommendedContents = styled.div``;

export const DetailPopup = () => {
  return (
    <Wrap>
      <PopUp>
        <ExitBtn>
          <svg viewBox="0 0 512 512">
            <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
          </svg>{" "}
        </ExitBtn>
        <Section1>
          <TextWrap>
            <Title>
              닥스의 우당탕탕 멀티버스~~<span>(2022)</span>
            </Title>
            <Tagline>"상상에상상에상상을더해ㅐ서"</Tagline>
            <Genres>판타지 | 액션 | 모험 </Genres>
            <Runtime>⏱126분</Runtime>
            <Overview>
              "아메리카(소치틀 고메즈)는 어느 날 멀티버스 사이를 오갈 수 있는
              힘에 눈을 뜨지만 완전히 제어하지 못한다. 정체불명의 악마가
              아메리카를 죽이려 하자 다른 우주의 스트레인지가 이를 막아보지만
              결국 살해당한다. 우여곡절 끝에 우리가 알고 있는 우주로 넘어온
              아메리카는 어벤져스 멤버인 닥터 스트레인지(베네딕트 컴버배치)의
              도움과 보호를 받는다. 닥터 스트레인지는 웨스트뷰 사건 이후 잠적한
              완다(엘리자베스 올슨)에게 도움을 청하지만 곧바로 그녀가 사건의
              진정한 흑막, 스칼렛 위치임이 드러난다. 스칼렛 위치는 자신의 원하는
              멀티버스로 가기 위해 아메리카의 힘을 흡수하려 한다. 닥터
              스트레인지와 아메리카는 압도적인 힘을 지닌 스칼렛 위치를 피해 또
              한번 다른 멀티버스로 도망치지만 그의 끈질긴 추격을 받는다."
            </Overview>
            <BtnWrap>
              <LikeBtn>♥</LikeBtn>
              <TrailerBtn>
                <svg viewBox="0 0 384 512">
                  <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                </svg>{" "}
                예고편 재생
              </TrailerBtn>
            </BtnWrap>
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
            <div>
              더보기
              <svg viewBox="0 0 384 512">
                <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
              </svg>
            </div>
          </Recommended>
          <RecommendedContents>
            <div>
              <div />
              <h5>영화제목</h5>
            </div>
            <div>
              <div />
              <h5>영화제목</h5>
            </div>
            <div>
              <div />
              <h5>영화제목</h5>
            </div>
            <div>
              <div />
              <h5>영화제목</h5>
            </div>
          </RecommendedContents>
        </Section3>
      </PopUp>
    </Wrap>
  );
};
