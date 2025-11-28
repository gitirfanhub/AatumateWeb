import React from "react";
import { AppAdvertisementWrapper } from "../HomePageStyles";
import Logo from "../../../images/Logo.svg";
import AppScreen from "../../../images/Mekaniku_Login_banner-2.1.png";
import PlayStore from "../../../images/google.png";
import IStore from "../../../images/Apple.png";
import { Link } from "react-router-dom";

const AppAdvertisement = () => {
  return (
    <AppAdvertisementWrapper>
      <div className="app-ad">
        <div className="app-screen">
          <img src={AppScreen} alt="App Screen" />
          <div className="playstore-details">
            <div className="logo-image">
              <img src={Logo} alt="Logo" />
            </div>
            <h2>
              To get your personalised product <br />
              details, please download app
            </h2>
            <div className="store-label">
              <Link to="/">
                <img src={PlayStore} alt="Google Play" />
              </Link>
              <Link to="/">
                <img src={IStore} alt="Apple Store" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AppAdvertisementWrapper>
  );
};

export default AppAdvertisement;
