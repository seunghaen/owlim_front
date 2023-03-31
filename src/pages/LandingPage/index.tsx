import { Box } from "@mui/material";
import React from "react";
import PageGrid from "../../UI/PageGrid";
import Introduction from "./Introduction";
import LoginForm from "./LoginForm";

function LandingPage() {
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
      <Introduction />
      <LoginForm />
    </Box>
  );
}

export default LandingPage;
