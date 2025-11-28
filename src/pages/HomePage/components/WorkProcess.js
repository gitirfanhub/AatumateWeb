import React from "react";
import { WorkProcessWrapper } from "../HomePageStyles";

const WorkProcess = () => {
  return (
    <WorkProcessWrapper>
      <h1 className="section-title">Our Work Process</h1>
      <div className="work-process">
        <div className="work-process-card">
          <div className="count">01</div>
          <div className="work-title">Select Car</div>
          <p className="work-content">
            Choose Your Car <br /> form Our World Wide <br /> Collections.
          </p>
        </div>
        <div className="work-process-card">
          <div className="count">02</div>
          <div className="work-title">Select a Car Service</div>
          <p className="work-content">
            Select Your Car <br /> form Our Wide Range <br /> of Offers.
          </p>
        </div>
        <div className="work-process-card">
          <div className="count">03</div>
          <div className="work-title">Select Workshop</div>
          <p className="work-content">
            Select Your Workshop <br /> form Your Nearby <br /> Workshop List.
          </p>
        </div>
        <div className="work-process-card">
          <div className="count">04</div>
          <div className="work-title">Get Services Car</div>
          <p className="work-content">
            Get Your Serviced <br /> Car from <br /> Workshop.
          </p>
        </div>
      </div>
    </WorkProcessWrapper>
  );
};

export default WorkProcess;
