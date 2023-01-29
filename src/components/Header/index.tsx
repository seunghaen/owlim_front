import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";

function Header() {
  const clickHander = () => {
    return;
  };
  return (
    <AppBar position="fixed" sx={{ height: 80, boxShadow: "none" }}>
      <Toolbar sx={{ mt: "10px" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          fontWeight="fontWeightMedium"
          onClick={clickHander}
          component="a"
          href="/"
          variant="h5"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          올 림
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
