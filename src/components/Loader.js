import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../json/Aatumate_Loader_3.json";

const LoaderWrapper = styled.div`
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    .loader {
      width: 200px;
      height: 200px;
      margin: auto;
    }
  }
`;

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <LoaderWrapper>
      <div className="loader-container">
        <div className="loader">
          <Lottie options={defaultOptions} width="100%" height="100%" />
        </div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
