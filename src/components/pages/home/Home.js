import styledComponents from "styled-components";
import { MainBanner } from "./MainBanner";

const Wrap = styledComponents.div`

`;

export const Home = () => {
  return (
    <Wrap>
      <MainBanner />
    </Wrap>
  );
};
