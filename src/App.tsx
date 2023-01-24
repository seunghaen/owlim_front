import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Sidebar from "./components/Sidebar";
import LetterMain from "./pages/LetterMain";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme();

const useStyles = makeStyles({
  root: {},
});
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid className={classes.root}>
        <Sidebar />
        <LetterMain></LetterMain>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
