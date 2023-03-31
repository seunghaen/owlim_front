import { Login } from "@mui/icons-material";
import { Outlet, RouteObject } from "react-router-dom";
import Header from "../components/Header";
import LandingPage from "../pages/LandingPage";
import { IsNotLoggedin } from "./hoc";

const LandngLayout = () => {
  return (
    <>
      <Header loggedin={false} />
      <IsNotLoggedin component={<Outlet />} />
    </>
  );
};

const landingRoute: RouteObject = {
  element: <LandngLayout />,
  children: [
    { path: "/login", element: <Login /> },
    { path: "/", element: <LandingPage /> },
  ],
};

export default landingRoute;
