import { Login } from "@mui/icons-material";
import { Outlet, RouteObject } from "react-router-dom";
import Header from "../components/Header";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/Signup";
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
    { path: "signup", element: <SignUp /> },
    { path: "/", element: <LandingPage /> },
  ],
};

export default landingRoute;
