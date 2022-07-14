import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Scrollbar } from "swiper";
import "swiper/css/scrollbar";
import { imgUrl } from "../../../constant/constant";

const Wrap = styled.div`
  padding-left: 100px;
  margin: 15px 0;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 90px;
`;

const Con = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    img {
      width: 110%;
    }
  }
`;

const Poster = styled.div`
  width: 100%;
  height: 18vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    transition: 0.3s;
  }
`;

const Name = styled.h3`
  font-size: 15px;
  font-weight: 100;
  margin: 5px 0;
`;

export const MovieContents = ({ mvData, contentsClass }) => {
  const openPopup = () => {
    console.log("클릭");
  };

  return (
    <Wrap>
      <Title>{contentsClass}</Title>
      <Swiper
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        spaceBetween={15}
        slidesPerView={7.3}
      >
        {mvData.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Con onClick={openPopup}>
              <Poster>
                <img src={`${imgUrl}${movie.poster_path}`} />
              </Poster>
              <Name>{movie.title}</Name>
            </Con>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap>
  );
};
