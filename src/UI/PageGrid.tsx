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
        width: `calc(100% - 190px)`,
        height: "100vh",
        overflow: "auto",
        borderRadius: 5,
        zIndex: 1100,
      }}
      bgcolor="white"
    >
      <Box
        sx={{
          // width: `calc(100vw-200px)`,
          pt: "10px",
          pl: "30px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default PageGrid;
