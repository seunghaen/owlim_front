import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import theme from "./theme";
import store, { useAppDispatch } from "./store";
import { useEffect } from "react";
import axios from "axios";
import userSlice from "./slices/user";

function App() {
  const dispatch = useAppDispatch();
  const getUser = async () => {
    try {
      const url = `/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      dispatch(userSlice.actions.login(data.user));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
