import React from "react";
import { TopSectionStyleWrapper } from "../HomePageStyles";
import TopImage from "../../../images/Mockup-2.png";
import GooglePlay from "../../../images/google.png";
import iStore from "../../../images/Apple.png";
import { MdMyLocation } from "react-icons/md";

const TopSection = () => {
  return (
    <TopSectionStyleWrapper>
      <div className="top-container">
        <div className="top-grid">
          <div className="top-contents">
            <h2 className="heading">Anywhere Bike and Car Service & Repair</h2>
            <p className="content">
              Get professional two-wheelers and LMV vehicles service, repair,
              spare parts, and much more at affordable prices near you.
            </p>
            <div className="store-images">
              <a
                href="https://www.iwayy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GooglePlay} alt="Google Play" />
              </a>
              <a
                href="https://www.iwayy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iStore} alt="Apple Store" />
              </a>
            </div>
            <form className="location-form">
              <input
                className="location"
                type="text"
                name="location"
                id="location"
                placeholder="Enter your location"
              />
              <button className="location-svg">
                <MdMyLocation />
                <p>Locate Me</p>
              </button>
              <button className="location-btn">Find</button>
            </form>
          </div>
          <div className="top-image">
            <img src={TopImage} alt="Aatumate Img" />
          </div>
        </div>
      </div>
    </TopSectionStyleWrapper>
  );
};

export default TopSection;
