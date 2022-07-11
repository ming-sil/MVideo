import { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { contentsApi } from "../../../api";
import { MainBanner } from "./MainBanner";

const Wrap = styledComponents.div`

`;

export const Home = () => {
  const [onAir, setonAir] = useState();

  useEffect(() => {
    const contentsData = async () => {
      try {
        // ㅂㅏㅇㅇㅕㅇㅈㅜㅇ tvㅅㅛ
        const {
          data: { results: tvOnair },
        } = await contentsApi.tvOnair();
        setonAir(tvOnair);
      } catch (error) {
        console.log(error);
      }
    };
    contentsData();
  }, []);
  console.log("ㅂㅏㅇㅇㅕㅇㅈㅜㅇ tvㅅㅛ:", onAir);


  return (
    <Wrap>
      <MainBanner />
    </Wrap>
  );
};
