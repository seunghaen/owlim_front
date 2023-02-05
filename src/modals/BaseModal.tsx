import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import modalSlice from "../slices/modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BaseModal() {
  const dispatch = useAppDispatch();
  const { isOpen, type } = useSelector((state: RootState) => state.modal);
  const handleClose = () => dispatch(modalSlice.actions.modalClose());

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box></Box>
    </Modal>
  );
}
