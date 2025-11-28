import React from "react";
import { ContactStyleWrapper } from "./ContactStyles";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { IconButton } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import GoogleMaps from "../../components/GoogleMaps";
import Breadcrumb from "../../components/Breadcrumb";

function Contact() {
  return (
    <ContactStyleWrapper>
      <div className="breadcrumb">
        <Breadcrumb title="Contact Us" />
      </div>
      <div className="contact-container">
        <div className="contact-flex">
          <div className="contact">
            <h1 className="contact-title">We're Here</h1>
            <div className="contact-details">
              <MdLocationPin />
              <p className="contact-para">
                No.14, College Road, New Town Vaniyambadi-635751, Tamil Nadu,
                India
              </p>
            </div>
            <div className="contact-details">
              <IoMdMail />
              <p className="contact-para">info@iwayy.com</p>
            </div>
            <div className="contact-details">
              <BsTelephoneFill />
              <p className="contact-para">+91 4174235307</p>
            </div>
            <div className="social-media-flex">
              <IconButton className="social-media">
                <FaFacebookF />
              </IconButton>
              <IconButton className="social-media">
                <FaTwitter />
              </IconButton>
              <IconButton className="social-media">
                <FaInstagram />
              </IconButton>
              <IconButton className="social-media">
                <FaYoutube />
              </IconButton>
            </div>
          </div>
          <div className="google-map">
            <GoogleMaps />
          </div>
        </div>
      </div>
    </ContactStyleWrapper>
  );
}

export default Contact;
