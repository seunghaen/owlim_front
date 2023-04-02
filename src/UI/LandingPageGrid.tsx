import { Box } from "@mui/material";
import React, { ReactNode } from "react";

type LandginPageGridProp = {
  children: ReactNode;
};

function LandingPageGrid(props: LandginPageGridProp) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
      bgcolor="white"
    >
      {props.children}
    </Box>
  );
}

export default LandingPageGrid;
