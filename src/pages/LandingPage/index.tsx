import { Box } from "@mui/material";
import React from "react";
import LandingPageGrid from "../../UI/LandingPageGrid";
import PageGrid from "../../UI/PageGrid";
import Introduction from "./Introduction";
import LoginForm from "./LoginForm";

function LandingPage() {
  return (
    <LandingPageGrid>
      <Introduction />
      <LoginForm />
    </LandingPageGrid>
  );
}

export default LandingPage;
