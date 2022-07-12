import { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { contentsApi } from "../../../api";
import { Loading } from "../../Loading";
import { Contents } from "./Contents";
import { MainBanner } from "./MainBanner";

const Wrap = styledComponents.div`

`;

export const Home = () => {
  // 인기
  const [tvPopular, setTvPopulaar] = useState();
  const [mPopular, setMPopular] = useState();
  // 방영,상영중
  const [onAir, setonAir] = useState();
  const [now, setNow] = useState();
  // 개봉예정
  const [upComming, setUpComming] = useState();
  // 높은평점
  const [tvTopRated, setTvTopRated] = useState();
  const [mTopRated, setMTopRated] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const contentsData = async () => {
      try {
        // 인기
        const {
          data: { results: tvPopular },
        } = await contentsApi.tvPopular();
        setTvPopulaar(tvPopular);
        const {
          data: { results: mPopular },
        } = await contentsApi.mPopular();
        setMPopular(mPopular);

        // 방영,상영중
        const {
          data: { results: tvOnair },
        } = await contentsApi.tvOnair();
        setonAir(tvOnair);
        const {
          data: { results: mNowPlaying },
        } = await contentsApi.mNowPlaying();
        setNow(mNowPlaying);

        // 개봉예정
        const {
          data: { results: mUpComming },
        } = await contentsApi.mUpComming();
        setUpComming(mUpComming);

        // 높은평점
        const {
          data: { results: tvTopRated },
        } = await contentsApi.tvTopRated();
        setTvTopRated(tvTopRated);
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrap>
          {(onAir,
          now,
          tvPopular,
          mPopular,
          upComming,
          tvTopRated,
          mTopRated) && (
            <>
              <MainBanner tvData={onAir} mvData={now} />
              <Contents tvData={tvPopular} contentsClass="인기 TV프로그램" />
              <Contents mvData={mPopular} contentsClass="인기 영화" />
              <Contents tvData={onAir} contentsClass="방영중인 TV쇼" />
              <Contents mvData={now} contentsClass="현재상영중 영화" />
              <Contents mvData={upComming} contentsClass="개봉 예정 영화" />
              <Contents tvData={tvTopRated} contentsClass="높은 평점 TV" />
              <Contents mvData={mTopRated} contentsClass="높은 평점 영화" />
            </>
          )}
        </Wrap>
      )}
    </>
  );
};
