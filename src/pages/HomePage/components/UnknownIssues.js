import React from "react";
import { UnknownIssuesFormWrapper } from "../HomePageStyles";
// import AutocompleteInput from "../../../components/AutocompleteInput";
// import TextFieldInput from "../../../components/TextFieldInput";
// import Button from "../../../components/Button";
import Img from "../../../images/Unknown_Issues_Diagnosis.svg";
import comingsoon from "../../../json/Unknown_Issues_Coming_Soon.json";
import { AiOutlineClose } from "react-icons/ai";
import Lottie from "react-lottie";

const UnknownIssues = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: comingsoon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <UnknownIssuesFormWrapper>
      <div className="unknown-container">
        <div className="header-section">
          <h4 className="heading">Unknown Services</h4>
          <div className="close-icon" onClick={props.closeUnknownDrawer}>
            <AiOutlineClose />
          </div>
        </div>
        <hr />
        {/* <p className="help-text">Help us to identify your issues?</p>
        <div className="field">
          <AutocompleteInput
            options={issueType}
            placeholder="Issue Type *"
            id="issueType"
            name="issueType"
          />
        </div>
        <div className="field">
          <AutocompleteInput
            options={issueType}
            placeholder="Issue Subtype *"
            id="issueSubtype"
            name="issueSubtype"
          />
        </div>
        <div className="field">
          <AutocompleteInput
            options={pickVehicle}
            placeholder="Pick Your Vehicle *"
            id="pickVehicle"
            name="pickVehicle"
          />
        </div>
        <div className="field">
          <TextFieldInput
            multiline
            fullWidth
            rows={3}
            id="description"
            name="description"
            placeholder="Description"
          />
        </div>
        <Button type="submit">Submit</Button> */}
        <div className="unknown-svg">
          <img src={Img} alt="Unknown Svg" />
        </div>
        <div className="unknown-json">
          <Lottie options={defaultOptions} />
        </div>
        <h3 className="app">Please download our app for the service.</h3>
      </div>
    </UnknownIssuesFormWrapper>
  );
};

export default UnknownIssues;
