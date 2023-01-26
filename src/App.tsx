import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";

const theme = createTheme();

const useStyles = makeStyles({
  root: { display: "flex" },
});
function App() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <LandingPage />
    </>
  );
}

export default App;
