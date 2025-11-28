import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MyVehicles from "./components/MyVehicles";
import Orders from "./components/Orders";
import Overview from "./components/Overview";
import { pages } from "./components/ProfilePages";
import ProfileStyleWrapper from "./ProfileStyles";

const Profile = () => {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState("overview");

  useEffect(() => {
    if (location.state?.select) {
      setSelectedPage(location.state.select);
    }
  });

  return (
    <ProfileStyleWrapper>
      <div className="profile-container">
        <div className="sidebar">
          <div className="menu">
            {pages.map((item, index) => {
              return (
                <div
                  className={
                    selectedPage === item.key ? "menu-item active" : "menu-item"
                  }
                  key={index}
                  onClick={() => setSelectedPage(item.key)}
                >
                  {item.heading}
                </div>
              );
            })}
          </div>
        </div>
        <div className="main-section">
          <div className="render-page">
            {selectedPage === "overview" ? <Overview /> : null}
            {selectedPage === "orders" ? <Orders /> : null}
            {selectedPage === "myvehicles" ? <MyVehicles /> : null}
          </div>
        </div>
      </div>
    </ProfileStyleWrapper>
  );
};

export default Profile;
