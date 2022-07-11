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
  console.log("ㅂㅏㅇㅇㅕㅇㅈㅜㅇ tvㅅㅛ", onAir);
  console.log("ㅅㅏㅇㅇㅕㅇㅈㅜㅇ ㅇㅕㅇㅎㅗㅏ", now);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrap>
          {(onAir, now) && (
            <>
              <MainBanner tvData={onAir} mvData={now} />
              <Contents tvData={onAir} contentsClass="방영중 TV쇼" />
              <Contents mvData={now} contentsClass="상영중 영화" />
            </>
          )}
        </Wrap>
      )}
    </>
  );
};
