import { Box, Grid, Typography } from "@mui/material";
import { stringify } from "querystring";
import React from "react";
import Sidebar from "../../components/Sidebar";
import LetterMain from "../LetterMain";

function LandingPage() {
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
      <Box sx={{ mt: "8px", ml: "8px" }}></Box>
    </Box>
  );
}

export default LandingPage;
