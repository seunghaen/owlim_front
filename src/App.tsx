import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { grey } from "@mui/material/colors";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Main from "./pages/Main";
import Subscribe from "./pages/Subscribe";
import Setting from "./pages/Setting";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "subscribe",
        element: <Subscribe />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
]);

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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
