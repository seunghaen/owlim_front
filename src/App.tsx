import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { grey } from "@mui/material/colors";
import "./App.css";
import LandingPage from "./pages/LandingPage";

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
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
