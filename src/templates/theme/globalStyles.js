import { createGlobalStyle } from "styled-components";
import NeurialGroteskLight from "../../fonts/NeurialGrotesk-Light.otf";
import NeurialGroteskRegular from "../../fonts/NeurialGrotesk-Regular.otf";
import NeurialGroteskMedium from "../../fonts/NeurialGrotesk-Medium.otf";
import NeurialGroteskBold from "../../fonts/NeurialGrotesk-Bold.otf";
import NeurialGroteskExtraBold from "../../fonts/NeurialGrotesk-Extrabold.otf";
import prevImage from "../../images/prev_indicator.svg";
import nextImage from "../../images/next_indicator.svg";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "Neurial Grotesk Light" ;
    src: url(${NeurialGroteskLight});
}
@font-face {
    font-family: "Neurial Grotesk Regular" ;
    src: url(${NeurialGroteskRegular});
}
@font-face {
    font-family: "Neurial Grotesk Medium" ;
    src: url(${NeurialGroteskMedium});
}
@font-face {
    font-family: "Neurial Grotesk Bold" ;
    src: url(${NeurialGroteskBold});
}
@font-face {
    font-family: "Neurial Grotesk Extra Bold" ;
    src: url(${NeurialGroteskExtraBold});
}
*{
    box-sizing: border-box;
    &::before, &::after{
        box-sizing: border-box;
    }    
}
body{
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-family: "Neurial Grotesk Medium", sans-serif;
    scroll-behavior: smooth;
    &::-webkit-scrollbar{
        display: none;
        width: 1rem;
    }
}
p{
    padding: 0;
    margin: 0;
}
h1, h2, h3, h4, h5, h6{
    margin: 0;
    font-family: "Neurial Grotesk Medium", sans-serif;
}
img{
    font: ${({ theme }) => theme.fontAppearance.defaultLight};
}
.main-section{
    margin-top: 5rem;
}
.section-title {
    color: ${({ theme }) => theme.colors.primary};
    font: ${({ theme }) => theme.fontAppearance.subheaderMedium};
    text-align: center;
    padding: 0.5rem 0;
}

.container{
    max-width: 1088px;
    margin: auto;
}
.feature {
    margin: 1rem 0;
}
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-button-prev {
    background-image: url(${prevImage});
    background-position: center center;
    &::after{
        content: ""
    }
}
.swiper-button-next{
    background-image: url(${nextImage});
    background-position: center center;
    &::after{
        content: ""
    }
}
.swiper-button-disabled{
    background-color: ${({ theme }) => theme.colors.grey} !important;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}
.breadcrumb{
    padding: 0 3rem;
}
.loader{    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}
.message-text{
    font: ${({ theme }) => theme.fontAppearance.defaultMedium};
    color: ${({ theme }) => theme.colors.primary};
}
.text-center{
    text-align: center;
}
.mr-1{
    margin-right: 1rem;
}
.mt-1{
    margin-top: 1rem !important; 
}
.addToCart__btn {    
    border: none;
    padding: 10px 25px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    font: ${({ theme }) => theme.fontAppearance.contentMedium};  
    text-align: center;
    cursor: pointer;
    width: fit-content;
}
.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75vh;
    font: ${({ theme }) => theme.fontAppearance.contentBold};
}

.animation {
    max-width: 400px;
    height: auto;
    margin: auto;
  }

@media screen and (max-width: 768px){
    .main-section{
        margin-top: 5rem;
    }
    .breadcrumb{
        padding: 0 1rem;
    }
}
`;

export default GlobalStyles;
