import { useEffect, useState } from "react";
import styled from "styled-components";
import { contentsApi } from "../../../../api";
import { Loading } from "../../../Loading";
import { TopBtn } from "../../../TopBtn";
import { MvPopup } from "./mdetail/MvPopup";
import { MovieContents } from "./MovieContents";
import { MvBanner } from "./MvBanner";

const Wrap = styled.div``;

export const Movies = () => {
  const [now, setNow] = useState();
  const [mPopular, setMPopular] = useState();
  const [upComming, setUpComming] = useState();
  const [mTopRated, setMTopRated] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const contentsData = async () => {
      try {
        // 상영중 영화
        const {
          data: { results: mNowPlaying },
        } = await contentsApi.mNowPlaying();
        setNow(mNowPlaying);
        // 인기
        const {
          data: { results: mPopular },
        } = await contentsApi.mPopular();
        setMPopular(mPopular);
        // 개봉예정
        const {
          data: { results: mUpComming },
        } = await contentsApi.mUpComming();
        setUpComming(mUpComming);
        // 높은평점
        const {
          data: { results: mTopRated },
        } = await contentsApi.mTopRated();
        setMTopRated(mTopRated);

        // 로딩
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    contentsData();
  }, []);
  // console.log("현재상영중 영화", now);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrap>
          {now && (
            <>
              <MvBanner mvData={now} />
              <MovieContents mvData={now} contentsClass="현재상영중" />
              <MovieContents mvData={mPopular} contentsClass="인기" />
              <MovieContents mvData={upComming} contentsClass="개봉 예정작" />
              <MovieContents mvData={mTopRated} contentsClass="높은 평점" />
            </>
          )}
          <MvPopup />
          <TopBtn />
        </Wrap>
      )}
    </>
  );
};
