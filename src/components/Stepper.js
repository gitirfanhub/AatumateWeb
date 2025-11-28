import React from "react";
import styled from "styled-components";
import { Stepper, Step, StepLabel, Typography } from "@mui/material";
import PropTypes from "prop-types";
import StepConnector, {
  stepConnectorClasses
} from "@mui/material/StepConnector";

const StepperStyle = styled.div`
  .main-container {
    width: 100%;
  }
  .backbutton {
    margin-right: 10px;
  }
  .MuiPaper-root {
    background-color: transparent;
  }
  .MuiStepper-root {
    padding: 0;
  }
  .MuiStepLabel-label.MuiStepLabel-alternativeLabel {
    margin: 9px 0;
    font-size: 0.6rem;
    font-weight: 500;
  }
  .state-date {
    font-size: 1rem;
    font-weight: 500;
  }
  .track {
    color: #8f0000;
  }
  .MuiStep-horizontal {
    padding: 0;
  }
  .date {
    color: ${({ theme }) => theme.colors.primary};
    font: 500 0.5rem/1 "Neurial Grotesk Medium";
  }
  .load {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "#999999",
  zIndex: 1,
  color: "#fff",
  width: 13,
  height: 13,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#37A8A9",
    boxShadow: "0 0 1px 8px rgba(69, 192, 196, 25%)"
  }),
  ...(ownerState.completed && {
    backgroundColor: "#37A8A9"
  })
}));

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: "5px"
    // left: "calc(-55% + 10px)",
    // right: "calc(45% + 10px)"
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#37A8A9"
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#37A8A9"
    },
    [`& .${stepConnectorClasses.alternativeLabel}`]: {
      color: "#000"
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: "#999999",
    borderRadius: 1,
    // top: -14,
    position: "relative"
  }
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      <div></div>
    </ColorlibStepIconRoot>
  );
}

export default function CustomStepper(props) {
  const { stepperData, activeStep } = props;
  console.log(activeStep);
  return (
    <StepperStyle>
      {stepperData ? (
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {stepperData.map((item, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {item.title}
                {item.subtitle !== "" && (
                  <Typography className="date">
                    {new Date(item.subtitle).toLocaleString()}
                  </Typography>
                )}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      ) : (
        <div className="load">Loading...</div>
      )}
    </StepperStyle>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
};
