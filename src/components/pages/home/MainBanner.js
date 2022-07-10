import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import { mainStyle } from "../../../styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Wrap = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
`;

const TextWrap = styled.div`
  width: 50%;
  padding: ${mainStyle.padding};
`;

const Title = styled.h1`
  font-size: 120px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 100;
  margin-bottom: 30px;
`;

const IconWrap = styled.div`
  display: flex;
`;

const Info = styled.div`
  height: ${mainStyle.btnHeight};
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

export const MainBanner = () => {
  return (
    <Wrap>
      <Swiper ClassName="wrap">
        <SwiperSlide>
          <TextWrap>
            <Title>{"컨텐츠 제목"}</Title>
            <Desc>{"컨텐츠 설명"}</Desc>
            <IconWrap>
              <Info>
                <FontAwesomeIcon icon={faCircleInfo} />
                상세정보 보기
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
