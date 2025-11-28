import React from "react";
import { StaticLayoutStyleWrapper } from "../HomePageStyles";
import { Link } from "react-router-dom";
import LayoutThree from "../../../images/Mechanics.png";
const StaticLayout = () => {
  return (
    <StaticLayoutStyleWrapper>
      <div className="layout container">
        <div className="left-section">
          <div className="layout-1">
            <div className="img-section">
              <div className="img-position">
                <h2 className="title">Track vehicle on Aatumate App</h2>
                <p className="cont">
                  Contact our nearest merchant for service.
                </p>
              </div>
            </div>
          </div>
          <div className="layout-1">
            <div className="image-section">
              <div className="img-position">
                <p className="cont">Protect your vehicle using our services.</p>
                <h2 className="title">Services</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="layout-2">
          <div className="image-section">
            <div className="img-position">
              <div className="content-section">
                <p className="cont">
                  mechanics are always with you when using our app
                </p>
                <h2 className="title">Mechanics</h2>
              </div>
              <span className="image">
                <img src={LayoutThree} alt="Image" />
              </span>
            </div>
          </div>
          <div className="nested-layout">
            <div className="layout-3">
              <div className="layout-3-section">
                <div className="layout-3-position">
                  <p className="cont">Search nearby mechanic</p>
                  <h2 className="title">Search Mechanic</h2>
                  <Link to="/products" className="link">
                    Checkout the products
                  </Link>
                </div>
              </div>
            </div>
            <div className="layout-section">
              <div className="layout-4">
                <div className="layout-4-section">
                  {/* <div className="layout-4-position">
                    <p className="cont">
                      Complete service with affordable Price
                    </p>
                    <h2 className="title">Affordable Price</h2>
                  </div> */}
                </div>
              </div>
              <div className="layout-4">
                <div className="layout-4-section bg-dif">
                  <div className="layout-4-position">
                    <p className="cont">Get Cashback after Referal</p>
                    <h2 className="title">Referal</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StaticLayoutStyleWrapper>
  );
};

export default StaticLayout;
