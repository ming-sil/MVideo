import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { EffectCreative, Autoplay } from "swiper";
import styled from "styled-components";
import { mainStyle } from "../../../styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { bannerimgUrl, imgUrl } from "../../constant/constant";
import { useState } from "react";

const Wrap = styled.div`
  width: 100%;
`;

const GradientBg = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(29, 29, 29);
  background: linear-gradient(
    90deg,
    rgba(29, 29, 29, 0.8) 0%,
    rgba(29, 29, 29, 0) 100%
  );
  position: absolute;
`;

const TextWrap = styled.div`
  width: 55%;
  padding: ${mainStyle.padding};
  margin-top: 100px;
  position: absolute;
  z-index: 99;
`;

const Title = styled.h1`
  font-size: 80px;
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
  cursor: pointer;
  margin-right: 20px;
  transition: 0.3s;
  svg {
    margin-right: 10px;
  }
  &:hover {
    background-color: white;
    color: ${mainStyle.highlightColor};
  }
`;

const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 10px;
    width: 20px;
    stroke: ${mainStyle.mainColor};
    stroke-width: 20;
    fill: ${(props) => props.fill};
    transition: 0.3s;
  }
  &:hover {
    svg {
      stroke: ${mainStyle.highlightColor};
      fill: ${mainStyle.highlightColor};
    }
  }
`;

export const MainBanner = ({ tvData, mvData }) => {
  const [bool, setBool] = useState(true);

  const [likeBtn, setLikeBtn] = useState("none");

  const openPopup = () => {
    console.log("클릭");
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
            background: `url(${
              mvData[0].backdrop_path
                ? `${bannerimgUrl}${mvData[0].backdrop_path}`
                : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
            }) no-repeat center / cover`,
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
              <Like fill={likeBtn} onClick={like}>
                <svg x="0px" y="0px" viewBox="0 0 526 512">
                  <path
                    d="M7,190.9v-5.8c0-69.9,50.5-129.5,119.4-141c44.7-7.6,92,7.3,124.6,39.9l12,12l11.1-12c33.5-32.6,79.9-47.5,125.5-39.9
c68.9,11.5,119.4,71.1,119.4,141v5.8c0,41.5-17.2,81.2-47.6,109.5L290.7,469.1c-7.5,7-17.4,10.9-27.7,10.9
c-10.3,0-20.2-3.9-27.7-10.9L54.6,300.4C24.2,272.1,7,232.4,7,190.9L7,190.9z"
                  />
                </svg>
                찜하기
              </Like>
            </IconWrap>
          </TextWrap>
          <GradientBg />
        </SwiperSlide>

        <SwiperSlide
          className="conWrap"
          style={{
            width: "100%",
            height: "85vh",
            display: "flex",
            alignItems: "center",
            background: `url(${
              tvData[0].backdrop_path
                ? `${imgUrl}${tvData[0].backdrop_path}`
                : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
            }) no-repeat center / cover`,
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
              <Like fill={likeBtn} onClick={like}>
                <svg x="0px" y="0px" viewBox="0 0 526 512">
                  <path
                    d="M7,190.9v-5.8c0-69.9,50.5-129.5,119.4-141c44.7-7.6,92,7.3,124.6,39.9l12,12l11.1-12c33.5-32.6,79.9-47.5,125.5-39.9
c68.9,11.5,119.4,71.1,119.4,141v5.8c0,41.5-17.2,81.2-47.6,109.5L290.7,469.1c-7.5,7-17.4,10.9-27.7,10.9
c-10.3,0-20.2-3.9-27.7-10.9L54.6,300.4C24.2,272.1,7,232.4,7,190.9L7,190.9z"
                  />
                </svg>
                찜하기
              </Like>
            </IconWrap>
          </TextWrap>
          <GradientBg />
        </SwiperSlide>

        <SwiperSlide
          className="conWrap"
          style={{
            width: "100%",
            height: "85vh",
            display: "flex",
            alignItems: "center",
            background: `url(${
              mvData[1].backdrop_path
                ? `${imgUrl}${mvData[1].backdrop_path}`
                : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
            }) no-repeat center / cover`,
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
              <Like fill={likeBtn} onClick={like}>
                <svg x="0px" y="0px" viewBox="0 0 526 512">
                  <path
                    d="M7,190.9v-5.8c0-69.9,50.5-129.5,119.4-141c44.7-7.6,92,7.3,124.6,39.9l12,12l11.1-12c33.5-32.6,79.9-47.5,125.5-39.9
c68.9,11.5,119.4,71.1,119.4,141v5.8c0,41.5-17.2,81.2-47.6,109.5L290.7,469.1c-7.5,7-17.4,10.9-27.7,10.9
c-10.3,0-20.2-3.9-27.7-10.9L54.6,300.4C24.2,272.1,7,232.4,7,190.9L7,190.9z"
                  />
                </svg>
                찜하기
              </Like>
            </IconWrap>
          </TextWrap>
          <GradientBg />
        </SwiperSlide>
      </Swiper>
    </Wrap>
  );
};
