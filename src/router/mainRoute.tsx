import { Outlet, RouteObject } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BaseModal from "../modals/BaseModal";
import Admin from "../pages/Admin";
import Main from "../pages/Main";
import SearchPage from "../pages/SearchPage";
import Setting from "../pages/Setting";
import Subscribe from "../pages/Subscribe";
import MailRead from "../pages/Subscribe/MailRead";
import { IsLoggedin } from "./hoc";

const MainLayout = () => {
  return (
    <>
      <BaseModal />
      <Header loggedin={true} />
      <Sidebar />
      <IsLoggedin component={<Outlet />} />
    </>
  );
};

const mainRoute: RouteObject = {
  path: "/main",
  element: <MainLayout />,
  children: [
    {
      path: "",
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
    {
      path: "search",
      element: <SearchPage />,
    },
    {
      path: "admin",
      element: <Admin />,
    },
    {
      path: "subscribe/:id",
      element: <MailRead />,
    },
  ],
};

export default mainRoute;
