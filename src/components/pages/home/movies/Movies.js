import { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { contentsApi } from "../../../../api";
import { Loading } from "../../../Loading";
import { Contents } from "../Contents";
import { MvBanner } from "./MvBanner";

const Wrap = styledComponents.div`

`;

export const Movies = () => {
  const [now, setNow] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const contentsData = async () => {
      try {
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
  console.log("현재상영중 영화", now);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrap>
          {now && (
            <>
              <MvBanner mvData={now} />
              <Contents mvData={now} contentsClass="현재상영중" />
              <Contents mvData={""} contentsClass="인기" />
              <Contents mvData={""} contentsClass="개봉 예정작" />
              <Contents mvData={""} contentsClass="높은 평점" />
            </>
          )}
        </Wrap>
      )}
    </>
  );
};
