import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Scrollbar } from "swiper";
import "swiper/css/scrollbar";
import { imgUrl } from "../../../constant/constant";
import { Link } from "react-router-dom";
import { Popup } from "../detail/Popup";
import { useState } from "react";

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

export const TvContents = ({ tvData, contentsClass }) => {
  const [bool, setBool] = useState(true);
  const [popup, setPopup] = useState("none");

  const handlePopup = () => {
    if (bool) {
      setPopup("block");
      setBool(false);
    } else if (!bool) {
      setPopup("none");
      setBool(true);
    }
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
        {tvData.map((tvShow) => (
          <SwiperSlide key={tvShow.id}>
            <Con onClick={handlePopup} className={tvShow.id}>
              <Poster>
                <img src={`${imgUrl}${tvShow.poster_path}`} />
              </Poster>
              <Name>{tvShow.name}</Name>
            </Con>
          </SwiperSlide>
        ))}
      </Swiper>
      <Popup openPopup={popup} style={{ display: { setPopup } }} />
    </Wrap>
  );
};
