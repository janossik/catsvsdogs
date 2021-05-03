import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        padding-top:40px;
        margin:0;
        background-color:#fcebfd;
        font-family: "Lemon", cursive;
    }
`;

export default GlobalStyle;
