import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { EffectCreative, Autoplay } from "swiper";
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
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: ${mainStyle.highlightColor};
  }
`;

const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;

export const MainBanner = ({ tvData, mvData }) => {
  const openPopup = () => {
    console.log("클릭");
  };


  return (
    <Wrap>
      <Swiper
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide
          className="conWrap"
          style={{
            width: "100%",
            height: "85vh",
            display: "flex",
            alignItems: "center",
            background: `url(${imgUrl}${mvData[0].backdrop_path}) no-repeat center / cover`,
          }}
        >
          <TextWrap>
            <Title>{mvData[0].title}</Title>
            <Desc>{mvData[0].overview.slice(0, 150) + "..."}</Desc>
            <IconWrap>
              <Info onClick={openPopup}>
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

        <SwiperSlide
          className="conWrap"
          style={{
            width: "100%",
            height: "85vh",
            display: "flex",
            alignItems: "center",
            background: `url(${imgUrl}${tvData[0].backdrop_path}) no-repeat center / cover`,
          }}
        >
          <TextWrap>
            <Title>{tvData[0].name}</Title>
            <Desc>{tvData[0].overview.slice(0, 150) + "..."}</Desc>
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

        <SwiperSlide
          className="conWrap"
          style={{
            width: "100%",
            height: "85vh",
            display: "flex",
            alignItems: "center",
            background: `url(${imgUrl}${mvData[1].backdrop_path}) no-repeat center / cover`,
          }}
        >
          <TextWrap>
            <Title>{mvData[1].title}</Title>
            <Desc>{mvData[1].overview.slice(0, 150) + "..."}</Desc>
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
