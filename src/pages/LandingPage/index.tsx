import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Sidebar from "../../components/Sidebar";

const useStyle = makeStyles({
  root: { marginTop: 68.5 },
  page: {
    marginLeft: 150,
    backgroundColor: "green",
  },
});

function LandingPage() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Sidebar />
      <Grid className={classes.page}>LandingPage</Grid>
    </div>
  );
}

export default LandingPage;
