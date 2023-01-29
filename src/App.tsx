import { makeStyles } from "@mui/styles";
import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { blue, grey } from "@mui/material/colors";
import "./App.css";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
