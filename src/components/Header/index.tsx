import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import Notification from "./Notification";
import SearchField from "./SearchField";

type HeaderProp = {
  loggedin: Boolean;
};

function ForLoggedinUser() {
  return (
    <>
      <SearchField />
      <Box sx={{ flexGrow: 0 }}>
        <Box>
          <Notification />
          <ProfileMenu />
        </Box>
      </Box>
    </>
  );
}

function ForLoggedoutUser() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인하기
      </Button>
    </>
  );
}

function Header(props: HeaderProp) {
  const navigate = useNavigate();
  const titleClickHandler = () => {
    const path = props.loggedin ? "/main" : "/";
    navigate(path);
  };
  return (
    <AppBar position="fixed" sx={{ height: 64, boxShadow: "none" }}>
      <Toolbar sx={{}}>
        {props.loggedin && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Button color="inherit">
          <Typography
            fontWeight="fontWeightMedium"
            variant="h6"
            sx={{ textDecoration: "none", color: "inherit" }}
            onClick={titleClickHandler}
          >
            올 림
          </Typography>
        </Button>
        <Box sx={{ flexGrow: 1 }}></Box>
        {props.loggedin ? <ForLoggedinUser /> : <ForLoggedoutUser />}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
