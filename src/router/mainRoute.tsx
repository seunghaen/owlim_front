import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BaseModal from "../modals/BaseModal";
import Main from "../pages/Main";
import SearchPage from "../pages/SearchPage";
import Setting from "../pages/Setting";
import Subscribe from "../pages/Subscribe";
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

const mainRoute = {
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
  ],
};

export default mainRoute;
