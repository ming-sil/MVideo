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

export const TvContents = ({ tvData, contentsClass }) => {
  console.log(tvData);
  return (
    <Wrap>
      <Title>{contentsClass}</Title>

      <Swiper>
        {tvData.map((tvShow) => (
          <SwiperSlide key={tvShow.id}>
            <Poster
              style={{
                background: `url(${imgUrl}${tvShow.poster_path}) no-repeat center / cover`,
              }}
            />
            <Name>{tvShow.name}</Name>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap>
  );
};
