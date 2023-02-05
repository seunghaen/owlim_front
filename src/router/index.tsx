import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../pages/Main";
import Setting from "../pages/Setting";
import Subscribe from "../pages/Subscribe";
import SearchPage from "../pages/SearchPage";

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
