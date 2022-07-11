import { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { contentsApi } from "../../../../api";
import { Loading } from "../../../Loading";
import { Contents } from "../Contents";
import { TvBanner } from "./TvBanner";

const Wrap = styledComponents.div`

`;

export const TvPrograms = () => {
  const [onAir, setonAir] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const contentsData = async () => {
      try {
        // ㅂㅏㅇㅇㅕㅇㅈㅜㅇ tvㅅㅛ
        const {
          data: { results: tvOnair },
        } = await contentsApi.tvOnair();
        setonAir(tvOnair);

        // ㄹㅗㄷㅣㅇ ㄲㅡㅌㄴㅐㄱㅣ
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    contentsData();
  }, []);
  console.log("방영중인 TV쇼", onAir);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrap>
          {onAir && (
            <>
              <TvBanner tvData={onAir} />
              <Contents tvData={""} contentsClass="인기" />
              <Contents tvData={onAir} contentsClass="TV 방영중" />
              <Contents tvData={""} contentsClass="높은 평점" />
            </>
          )}
        </Wrap>
      )}
    </>
  );
};
