import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { Link } from "react-router-dom";

// import { HiClipboardDocumentList } from "react-icons/hi";

const FooterStyleWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem 4rem;
    .social-media-section {
      padding: 0.5rem 1rem;
      .social-media-icons {
        display: flex;
        align-items: flex-start;
        gap: 15px;
        padding-bottom: 1rem;
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 35px;
          height: 35px;
          padding: 3px;
          border-radius: 50%;
          box-shadow: ${({ theme }) => theme.shadow.default};
          cursor: pointer;
          svg {
            max-width: 100%;
            height: auto;
            fill: ${({ theme }) => theme.colors.primary};
          }
        }
      }
      .copyright {
        font: ${({ theme }) => theme.fontAppearance.contentLight};
        color: ${({ theme }) => theme.colors.primary};
        line-height: 1.5rem;
      }
    }
    .contact {
      padding: 0.5rem 1rem;
      .contact-details {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        svg {
          max-width: 100%;
          height: auto;
          font-size: 1.3rem;
          color: ${({ theme }) => theme.colors.primary};
        }
        .contact-text {
          font: ${({ theme }) => theme.fontAppearance.contentMedium};
          color: ${({ theme }) => theme.colors.primary};
          text-decoration: none;
        }
      }
    }
    .social-media {
      font: ${({ theme }) => theme.fontAppearance.titleBold};
      color: ${({ theme }) => theme.colors.primary};
      padding-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      padding: 1rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyleWrapper>
      <footer>
        <div className="footer-container">
          <div className="social-media-section">
            <h3 className="social-media">Follow Us</h3>
            <div className="social-media-icons">
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
              <div className="icon">
                <FaYoutube />
              </div>
            </div>
            <h4 className="copyright">
              © Copyright {new Date().getFullYear()} by IWAYY Technology
              Solutions | All Rights Reserved.
            </h4>
          </div>
          <div className="contact">
            <h3 className="social-media">Contact</h3>
            <div className="contact-details">
              <TbWorld />
              <p className="contact-text">www.Aatumate.com</p>
            </div>
            <div className="contact-details">
              <BsFillTelephoneFill />
              <p className="contact-text">+1234-768901</p>
            </div>
            <div className="contact-details">
              <HiOutlineClipboardList />
              <Link to="/termsandconditions" className="contact-text">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyleWrapper>
  );
};

export default Footer;
