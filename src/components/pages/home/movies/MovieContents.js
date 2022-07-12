import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { imgUrl } from "../../../constant/constant";

const Wrap = styled.div``;

const Title = styled.div`
  font-size: 20px;
`;

const Poster = styled.div`
  width: 100%;
  height: 200px;
`;

const Name = styled.h3``;

export const MovieContents = ({ mvData, contentsClass }) => {
  console.log(mvData);
  return (
    <Wrap>
      <Title>{contentsClass}</Title>
      <Swiper>
        {mvData.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Poster
              style={{
                background: `url(${imgUrl}${movie.backdrop_path}) no-repeat center / cover`,
              }}
            />
            <Name>{movie.title}</Name>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap>
  );
};
