import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import Notification from "./Notification";
import SearchField from "./SearchField";

function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="fixed" sx={{ height: 64, boxShadow: "none" }}>
      <Toolbar sx={{}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Button color="inherit">
          <Typography
            fontWeight="fontWeightMedium"
            variant="h6"
            sx={{ textDecoration: "none", color: "inherit" }}
            onClick={() => navigate("/")}
          >
            올 림
          </Typography>
        </Button>
        <Box sx={{ flexGrow: 1 }}></Box>
        <SearchField />
        <Box sx={{ flexGrow: 0 }}>
          <Box>
            <Notification />
            <ProfileMenu />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
