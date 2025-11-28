import React, { useState } from "react";
import OtpVerificationStyles from "./OTPVerificationStyles";
import OTPJson from "../../json/OtpVerification.json";
import Lottie from "react-lottie";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { postData } from "../../utils/fetchData";
import { MSG_TYPE, useToaster } from "../../components/Toastbar";
import Button from "../../components/Button";

const initialValues = {
  phoneNumber: "",
  otpSignup: ""
};

const OTPVerification = () => {
  const toaster = useToaster();
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState({ otp: "" });
  const [data, setData] = useState(initialValues);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: OTPJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleOtp = (otp) => {
    setState({ otp });
  };

  const onsubmit = async () => {
    try {
      data.phoneNumber = location.state;
      data.otpSignup = state.otp;
      const response = await postData("cemailverify", data);
      if (response.data) {
        setData(initialValues);
        navigate("/login");
      } else {
        toaster(MSG_TYPE.WARNING, response.message);
      }
    } catch (error) {
      toaster(MSG_TYPE.ERROR, error.message);
    }
  };

  return (
    <OtpVerificationStyles>
      <div className="otp-container">
        <div className="otp-form">
          <div className="image-section">
            {/* <Lottie options={defaultOptions} /> */}
          </div>
          <div className="email-container">
            <div className="label">
              Please enter the OTP sent to your email ID
            </div>
            <div className="otp-field">
              <OtpInput
                value={state.otp}
                onChange={handleOtp}
                numInputs={4}
                separator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>

            <Button onClick={onsubmit}>Verify</Button>
          </div>
        </div>
      </div>
    </OtpVerificationStyles>
  );
};

export default OTPVerification;
