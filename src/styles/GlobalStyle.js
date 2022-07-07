import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
    bgColor: "#1d1d1d",
    highlightColor: "#ff9900",
    padding: "0 100px",
    mainColor: "white",
    btnHeight: "60px",
    btnRadius: "10px",
    btnPadding: "0 30px",
    btnFontSize: "20px",
    btnFontWeight: "600"
}

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${mainStyle.bgColor};
        color: ${mainStyle.mainColor};
        letter-spacing: -1px;
        word-break: keep-all;
    }

    a{
        text-decoration: none;
        color: ${mainStyle.mainColor};
    }

    img{
        width: 100%;
    }
`