import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

type modalStyleType = {
  body: SxProps<Theme>;
  buttonBox: SxProps<Theme>;
};
const modalStyle: modalStyleType = {
  body: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  buttonBox: { mt: "50px", display: "flex", justifyContent: "flex-end" },
};

export default modalStyle;
