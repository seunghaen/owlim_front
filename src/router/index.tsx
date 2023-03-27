import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../pages/Main";
import Setting from "../pages/Setting";
import Subscribe from "../pages/Subscribe";
import SearchPage from "../pages/SearchPage";
import BaseModal from "../modals/BaseModal";
import Login from "../pages/Login";

const AppLayout = () => {
  return (
    <>
      <BaseModal />
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
        element: <Login />,
      },
      {
        path: "/subscribe",
        element: <Subscribe />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
