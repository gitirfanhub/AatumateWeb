import React, { createContext, useContext, useState } from "react";
import MuiAlert from "@mui/material/Alert";
import styled from "styled-components";
import { Slide, Snackbar } from "@mui/material";

const ToastbarWrapper = styled.div`
  .MuiSnackbarContent-root,
  .MuiSnackbarContent-message {
    padding: 0;
    background-color: transparent;
    min-width: 140px;
  }
`;

export const MSG_TYPE = {
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success"
};

export const ToastContext = createContext();

export function useToaster() {
  const { handleClick } = useContext(ToastContext);
  return handleClick;
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

export const ToastbarProvider = ({ children }) => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    msgType: "",
    msgContent: ""
  });
  const [transition, setTransition] = useState(undefined);
  const { vertical, horizontal, open } = state;

  const handleClick = (msgType, msgContent) => {
    setState((prevState) => ({
      ...prevState,
      open: true,
      vertical: "top",
      horizontal: "center",
      msgType,
      msgContent
    }));
    setTransition(() => TransitionRight);
  };

  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ ...state, open: false });
  };

  return (
    <ToastContext.Provider value={{ handleClick }}>
      <ToastbarWrapper>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
          TransitionComponent={transition}
          key={vertical + horizontal}
          message={
            <Alert onClose={handleClose} severity={state.msgType}>
              {state.msgContent}
            </Alert>
          }
        ></Snackbar>
      </ToastbarWrapper>
      {children}
    </ToastContext.Provider>
  );
};
