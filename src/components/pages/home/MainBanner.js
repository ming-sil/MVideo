import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";

const Wrap = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }
`;

export const MainBanner = () => {
  return (
    <Wrap>
      <Swiper ClassName="wrap">
        <SwiperSlide>
          <div>Slide</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide</div>
        </SwiperSlide>
      </Swiper>
    </Wrap>
  );
};
