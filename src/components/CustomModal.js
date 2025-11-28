import React from "react";
import { Backdrop, Modal, Fade, Box } from "@mui/material";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  outline: "none",
  borderRadius: "5px"
};

const CustomModal = ({ open, FadeIn, children, onClose }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={FadeIn}>
        <Box sx={styles}>{children}</Box>
      </Fade>
    </Modal>
  );
};
export default CustomModal;
