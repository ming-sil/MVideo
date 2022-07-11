import { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { contentsApi } from "../../../api";
import { Loading } from "../../Loading";
import { Contents } from "./Contents";
import { MainBanner } from "./MainBanner";

const Wrap = styledComponents.div`

`;

export const Home = () => {
  const [onAir, setonAir] = useState();
  const [now, setNow] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const contentsData = async () => {
      try {
        // ㅂㅏㅇㅇㅕㅇㅈㅜㅇ tvㅅㅛ
        const {
          data: { results: tvOnair },
        } = await contentsApi.tvOnair();
        setonAir(tvOnair);

        // ㅅㅏㅇㅇㅕㅇㅈㅜㅇ ㅇㅕㅇㅎㅗㅏ
        const {
          data: { results: mNowPlaying },
        } = await contentsApi.mNowPlaying();
        setNow(mNowPlaying);

        // ㄹㅗㄷㅣㅇ ㄲㅡㅌㄴㅐㄱㅣ
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    contentsData();
  }, []);
  console.log("방영중인 TV쇼", onAir);
  console.log("현재상영중 영화", now);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrap>
          {(onAir, now) && (
            <>
              <MainBanner tvData={onAir} mvData={now} />
              <Contents tvData={""} contentsClass="인기 TV프로그램" />
              <Contents mvData={""} contentsClass="인기 영화" />
              <Contents tvData={onAir} contentsClass="방영중인 TV쇼" />
              <Contents mvData={now} contentsClass="현재상영중 영화" />
              <Contents mvData={""} contentsClass="개봉 예정 영화" />
              <Contents tvData={""} contentsClass="높은 평점 TV" />
              <Contents mvData={""} contentsClass="높은 평점 영화" />
            </>
          )}
        </Wrap>
      )}
    </>
  );
};
