import { Loading } from "../../../../Loading";
import { MvDetailPopup } from "./MvDetailPopup";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { contentsApi } from "../../../../../api";

export const MvPopup = () => {
  const [mDetail, setMDetail] = useState();
  const [mTrailer, setMTrailer] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const detailData = async () => {
      const { data: mDetail } = await contentsApi.mDetail(id);
      setMDetail(mDetail);

      const {
        data: { results: mTrailer },
      } = await contentsApi.mVideo(id);
      setMTrailer(mTrailer.length === 0 ? null : mTrailer[0].key);

      setLoading(false);
    };
    detailData();
  }, []);

  console.log(mDetail);
  console.log(mTrailer);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {mDetail && <MvDetailPopup mvDetail={mDetail} mvTrailer={mTrailer} />}
        </>
      )}
    </>
  );
};
