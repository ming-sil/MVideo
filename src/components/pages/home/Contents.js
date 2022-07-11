import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const Wrap = styled.div``;
const Title = styled.div``;

export const Contents = ({ tvData, mvData, contentsClass }) => {
  return (
    <Wrap>
      <Title>{contentsClass}</Title>
      <Swiper>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </Wrap>
  );
};
