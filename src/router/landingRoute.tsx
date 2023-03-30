import { Login } from "@mui/icons-material";
import { Outlet, RouteObject } from "react-router-dom";
import Header from "../components/Header";
import LandingPage from "../pages/LandingPage";

const LandngLayout = () => {
  return (
    <>
      <Header loggedin={false} />
      <Outlet />
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
