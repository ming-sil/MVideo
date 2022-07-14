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
  const { id } = useParams();

  useEffect(() => {
    const detailData = async () => {
      //영화
      const { data: mDetail } = await contentsApi.mDetail(id);
      setMDetail(mDetail);

      const {
        data: { results: mTrailer },
      } = await contentsApi.mVideo(id);
      setMTrailer(mTrailer.length === 0 ? null : mTrailer[0].key);

      //tv
      const { data: tvDetail } = await contentsApi.tvDetail(id);
      setTvDetail(tvDetail);

      const {
        data: { results: tvTrailer },
      } = await contentsApi.tvVideo(id);
      setTvTrailer(tvTrailer.length === 0 ? null : tvTrailer[0].key);

      setLoading(false);
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
          {(mDetail || tvDetail) && (
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
