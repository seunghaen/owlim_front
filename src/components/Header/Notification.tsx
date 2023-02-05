import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";

function Notification() {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 1 }}
    >
      <NotificationsIcon sx={{ fontSize: 30 }} />
    </IconButton>
  );
}

export default Notification;
