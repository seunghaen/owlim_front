import { Box } from "@mui/material";
import { ReactNode } from "react";

type PageGridProp = {
  children: ReactNode;
};
function PageGrid({ children }: PageGridProp) {
  return (
    <Box
      position="fixed"
      sx={{
        top: "59px",
        left: "195px",
        width: "100%",
        height: "100vh",
        overflow: "auto",
        borderRadius: 5,
        zIndex: 1100,
      }}
      bgcolor="white"
    >
      <Box sx={{ pt: "10px", pl: "10px" }}>{children}</Box>
    </Box>
  );
}

export default PageGrid;
