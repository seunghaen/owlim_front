import { createBrowserRouter } from "react-router-dom";
import landginRoute from "./landingRoute";
import mainRoute from "./mainRoute";

const router = createBrowserRouter([landginRoute, mainRoute]);

export default router;
