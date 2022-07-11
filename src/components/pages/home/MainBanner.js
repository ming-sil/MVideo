import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import { mainStyle } from "../../../styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { imgUrl } from "../../constant/constant";

const Wrap = styled.div`
  width: 100%;
`;

const TextWrap = styled.div`
  width: 55%;
  padding: ${mainStyle.padding};
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 100px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 100;
  margin-bottom: 50px;
`;

const IconWrap = styled.div`
  display: flex;
`;

const Info = styled.div`
  width: auto;
  height: 40px;
  padding: ${mainStyle.btnPadding};
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${mainStyle.btnRadius};
  svg {
    margin-right: 10px;
  }
  margin-right: 20px;
`;

const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const MainBanner = ({ conData }) => {
  return (
    <Wrap>
      <Swiper>
        <SwiperSlide
          ClassName="conWrap"
          style={{
            width: "100%",
            height: "85vh",
            display: "flex",
            alignItems: "center",
            background: `url(${imgUrl}${conData[0].backdrop_path}) no-repeat center / cover`,
          }}
        >
          <TextWrap>
            <Title>{"컨텐츠 제목"}</Title>
            <Desc>
              {
                "컨텐츠 설명:아메리카(소치틀 고메즈)는 어느 날 멀티버스 사이를 오갈 수 있는 힘에 눈을 뜨지만 완전히 제어하지 못한다. 정체불명의 악마가 아메리카를 죽이려 하자 다른 우주의 스트레인지가 이를 막아보지만..."
              }
            </Desc>
            <IconWrap>
              <Info>
                <FontAwesomeIcon icon={faCircleInfo} />
                <span>상세정보 보기</span>
              </Info>
              <Like>
                <FontAwesomeIcon icon={faHeart} />
                찜하기
              </Like>
            </IconWrap>
          </TextWrap>
        </SwiperSlide>
      </Swiper>
    </Wrap>
  );
};
