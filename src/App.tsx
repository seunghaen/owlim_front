import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import theme from "./theme";
import { useAppDispatch } from "./store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/reducer";
import { refreshToken } from "./api/auth";

function App() {
  const dispatch = useAppDispatch();
  const loginId = useSelector((state: RootState) => state.user.loginId);
  useEffect(() => {
    if (!loginId) {
      dispatch(refreshToken());
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
