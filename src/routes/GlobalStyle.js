import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import Fonts from "../assets/css/fonts.css";

const GlobalStyles = createGlobalStyle`
  ${reset};
  ${Fonts};

  * {
    box-sizing: border-box;
  }
  
  body {
    width: 100%;
    min-width: 1200px;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;

