import { Loading } from "../../../Loading";
import { DetailPopup } from "./DetailPopup";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { contentsApi } from "../../../../api";

export const Popup = () => {
  const [mDetail, setMDetail] = useState();
  const [tvDetail, setTvDetail] = useState();
  const [mTrailer, setMTrailer] = useState();
  const [tvTrailer, setTvTrailer] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detailData = async () => {
      try {
        //영화
        const { data: mDetail } = await contentsApi.mDetail(92782);
        setMDetail(mDetail);

        const {
          data: { results: mTrailer },
        } = await contentsApi.mVideo(92782);
        setMTrailer(mTrailer.length === 0 ? null : mTrailer[0].key);

        //tv
        const { data: tvDetail } = await contentsApi.tvDetail(92782);
        setTvDetail(tvDetail);

        const {
          data: { results: tvTrailer },
        } = await contentsApi.tvVideo(92782);
        setTvTrailer(tvTrailer.length === 0 ? null : tvTrailer[0].key);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    detailData();
  }, []);

  console.log(mDetail);
  console.log(tvDetail);
  console.log(mTrailer);
  console.log(tvTrailer);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {mDetail && tvDetail && (
            <DetailPopup
              mDetail={mDetail}
              mTrailer={mTrailer}
              tvDetail={tvDetail}
              tvTrailer={tvTrailer}
            />
          )}
        </>
      )}
    </>
  );
};
