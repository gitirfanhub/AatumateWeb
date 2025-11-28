import React from "react";
import { AboutStyleWrapper } from "./AboutStyles";
import { services } from "../../store/CarouselData";
import Breadcrumb from "../../components/Breadcrumb";
import CarWork from "../../images/car-repair.jpg";
import Lottie from "react-lottie";

function About() {
  return (
    <AboutStyleWrapper>
      <div className="breadcrumb">
        <Breadcrumb title="About Us" />
      </div>
      <div className="about-container">
        <div className="about-vision">
          <div className="vision-content">
            <article className="header">
              <h3>
                World Wide Services <br /> only for you
              </h3>
              <p>
                We offered world wide car services with affordable price at
                various places.
              </p>
            </article>
            <div className="services-center">
              {services.map((service) => {
                const { id, text, icon, title } = service;
                const defaultOptions = {
                  loop: false,
                  autoplay: true,
                  animationData: icon,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                  }
                };
                return (
                  <article key={id} className="service">
                    <span className="icon">
                      <Lottie
                        options={defaultOptions}
                        width="100%"
                        height="100%"
                      />
                    </span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
        <div className="about-us">
          <div className="about-flex">
            <div className="about-content">
              <h2 className="about-title">About Us</h2>
              <p className="about-para">
                With the formation of the core idea in mid-2021 and established
                in 2022 following extensive research and development, Aatumate
                is an app aiming to connect car owners with workshops in a
                convenient and fair manner, utilising the latest technological
                processes available.
              </p>
              <p className="about-para">
                Aatumate has been established with a view to remain consistent
                with its core values and image.
              </p>
              <p className="about-para">
                With the founders having personal and professional experiences
                within the motor industry, the vision of Aatumate is to ensure
                the highest level of service for all stakeholders along with a
                level of scrutiny, attention to detail and excellent execution
                expected from a leading service provider.
              </p>
              <p className="about-para">
                Aatumate aims to be a disruptor in the automotive sector and to
                become a provider of the fairest and most transparent method in
                matching car owners with workshops. Aatumate hopes to change the
                very negative perception surrounding the car repair industry.
              </p>
              <p className="about-para">
                With inflated prices, fraudulent practices and unsatisfactory
                levels of service provided, Malaysian workshops have an
                undesirable reputation which we believe can easily be rectified
                through our app and technology.
              </p>
              <p className="about-para">
                The Aatumate app is the customer facing and very public presence
                of the company, as well as being the interface for interaction
                with workshops and car repair centres. It will act as a catalyst
                to ensure overpricing of spare parts and services will no longer
                exist, along with leaving no room for service providers to
                misguide car owners.
              </p>
              <p className="about-para">
                With Aatumate, workshops will achieve higher standards and set a
                high standard which will normalise throughout the industry. And
                car owners will gain confidence in utilising workshops for
                services without the fear of being overcharged or cheated.
              </p>
            </div>
            <div className="about-image">
              <img src={CarWork} alt="ABOUT US" />
            </div>
          </div>
        </div>
      </div>
    </AboutStyleWrapper>
  );
}

export default About;
