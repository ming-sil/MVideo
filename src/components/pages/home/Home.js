import { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { contentsApi } from "../../../api";
import { Loading } from "../../Loading";
import { MainBanner } from "./MainBanner";

const Wrap = styledComponents.div`

`;

export const Home = () => {
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

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    contentsData();
  }, []);
  console.log("ㅂㅏㅇㅇㅕㅇㅈㅜㅇ tvㅅㅛ:", onAir);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrap>{onAir && <MainBanner conData={onAir} />}</Wrap>
      )}
    </>
  );
};
