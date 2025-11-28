import React from "react";
import styled from "styled-components";
import LogoImg from "../images/Aatumate_Icon.svg";
import GooglePlay from "../images/google.png";
import AppleStore from "../images/Apple.png";
import NextArrow from "../images/ArrowIcon.svg";
import { Link } from "react-router-dom";

const CallToActionWrapper = styled.section`
  padding: 0 32px;
  .call {
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    padding: 32px 60px;
    .action {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content {
        h2 {
          color: ${({ theme }) => theme.colors.secondary};
          font: 400 29px/1 "Neurial Grotesk Regular";
        }
        p {
          font: 400 17px/24px "Neurial Grotesk Regular";
          color: ${({ theme }) => theme.colors.tertiary};
        }
      }

      .store-section {
        display: flex;
        align-items: center;
        gap: 1rem;
        .store {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 2px;
          background-color: ${({ theme }) => theme.colors.secondary};
          border-radius: 5px;
          padding: 0.3rem 0.5rem;
        }
        .play-store {
          max-width: 120px;
          img {
            max-width: 100%;
            height: auto;
            vertical-align: middle;
          }
        }
        .logo-contrast {
          width: 55px;
          img {
            max-width: 100%;
            height: auto;
          }
        }
        .arrow {
          img {
            max-width: 100%;
            height: auto;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .call {
      .action {
        flex-direction: column;
        gap: 10px;
        .logo-contrast {
          width: 100px;
        }
      }
    }
  }
`;

const CallToAction = () => {
  return (
    <CallToActionWrapper>
      <div className="call">
        <div className="action">
          <div className="content">
            <h2>Sign up to Aatumate</h2>
            <p>Fix your vehicle's Problem.</p>
          </div>
          <div className="store-section">
            <div className="logo-contrast">
              <img src={LogoImg} alt="Logo" />
            </div>
            <div className="store">
              <div className="play-store">
                <Link to="/">
                  <img src={GooglePlay} alt="Google Play Store" />
                </Link>
              </div>
              <div className="play-store">
                <Link to="/">
                  <img src={AppleStore} alt="IStore" />
                </Link>
              </div>
              <div className="arrow">
                <img src={NextArrow} alt="Arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CallToActionWrapper>
  );
};

export default CallToAction;
