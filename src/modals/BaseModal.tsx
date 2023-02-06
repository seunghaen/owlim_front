import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import modalSlice, { ModalType } from "../slices/modal";
import SearchModal from "./SearchModal";
import { Button } from "@mui/material";
import modalStyle from "./modalStyle";

type ModalListType = {
  type: ModalType;
  component: JSX.Element;
};

const modalList: ModalListType[] = [
  {
    type: "search",
    component: <SearchModal />,
  },
];

export default function BaseModal() {
  const dispatch = useAppDispatch();
  const { isOpen, type } = useSelector((state: RootState) => state.modal);
  const handleClose = () => dispatch(modalSlice.actions.modalClose());

  const findModal = modalList.find((item) => item.type === type);

  const renderModal = () => {
    if (findModal) {
      return findModal.component;
    }
    return <Box />;
  };

  return (
    <Modal open={isOpen} onClose={handleClose} aria-labelledby="base-modal">
      <Box sx={modalStyle.body}>
        {renderModal()}
        <Box sx={modalStyle.buttonBox}>
          <Button
            onClick={handleClose}
            color="secondary"
            variant="contained"
            size="medium"
          >
            닫기
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
