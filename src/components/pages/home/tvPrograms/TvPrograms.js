import { useEffect, useState } from "react";
import styled from "styled-components";
import { contentsApi } from "../../../../api";
import { Loading } from "../../../Loading";
import { TopBtn } from "../../../TopBtn";
import { TvBanner } from "./TvBanner";
import { TvContents } from "./TvContents";

const Wrap = styled.div``;

export const TvPrograms = () => {
  const [onAir, setonAir] = useState();
  const [tvPopular, setTvPopular] = useState();
  const [tvTopRated, setTvTopRated] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const contentsData = async () => {
      try {
        // 방영중
        const {
          data: { results: tvOnair },
        } = await contentsApi.tvOnair();
        setonAir(tvOnair);
        // 인기
        const {
          data: { results: tvPopular },
        } = await contentsApi.tvPopular();
        setTvPopular(tvPopular);
        // 높은평점
        const {
          data: { results: tvTopRated },
        } = await contentsApi.tvTopRated();

        setTvTopRated(tvTopRated);

        // 로딩
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
              <TvContents tvData={tvPopular} contentsClass="인기" />
              <TvContents tvData={onAir} contentsClass="TV 방영중" />
              <TvContents tvData={tvTopRated} contentsClass="높은 평점" />
            </>
          )}
          <TopBtn />
        </Wrap>
      )}
    </>
  );
};
