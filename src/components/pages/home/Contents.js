import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { imgUrl } from "../../constant/constant";

const Wrap = styled.div``;

const Title = styled.div``;

const Poster = styled.div`
  width: 100%;
`;

export const Contents = ({ tvData, mvData, contentsClass }) => {
  return (
    <Wrap>
      <Title>{contentsClass}</Title>

      {/* <Swiper>
        {tvData.map((tvShow) => (
          <SwiperSlide key={tvShow.id}>
            <Poster
              style={{
                background: `url(${imgUrl}${tvShow.poster_path}) no-repeat center / cover`,
              }}
            />
            <Title>{tvShow.name}</Title>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper>
        {mvData.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Poster
              style={{
                background: `url(${imgUrl}${movie.backdrop_path}) no-repeat center / cover`,
              }}
            />
            <Title>{movie.name}</Title>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </Wrap>
  );
};
