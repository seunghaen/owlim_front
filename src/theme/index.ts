import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import "./theme.css";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[100],
    },
  },
  typography: {
    fontFamily: ["Spoqa Han Sans Neo"].join(","),
  },
});

export default theme;
