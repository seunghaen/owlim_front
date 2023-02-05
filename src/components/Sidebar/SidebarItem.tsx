import { ListItem, SxProps, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export type SidebarMenuItem = {
  listText: string;
  path: string;
};

type SidebarItemProps = {
  key: number;
  listItem: SidebarMenuItem;
};

function SidebarItem(props: SidebarItemProps) {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;

  function iconMaker(path: string) {
    const iconProp: { size: SxProps; color: "secondary" | "inherit" } = {
      size: { fontSize: "smaill", pr: "10px" },
      color: path === pathName ? "secondary" : "inherit",
    };
    switch (path) {
      case "/":
        return {
          icon: <EmailOutlinedIcon color={iconProp.color} sx={iconProp.size} />,
        };
      case "/subscribe":
        return {
          icon: <ListOutlinedIcon color={iconProp.color} sx={iconProp.size} />,
        };
      case "/search":
        return {
          icon: (
            <SearchOutlinedIcon color={iconProp.color} sx={iconProp.size} />
          ),
        };
      case "/setting":
        return {
          icon: (
            <SettingsOutlinedIcon color={iconProp.color} sx={iconProp.size} />
          ),
        };
    }
  }
  return (
    <ListItem
      sx={{ mt: "10px", ml: "10px", width: "180px" }}
      button
      key={props.key}
      onClick={() => {
        navigate(props.listItem.path);
      }}
    >
      {iconMaker(props.listItem.path)?.icon}
      <Typography
        color={pathName === `${props.listItem.path}` ? "secondary" : "black"}
        variant="body2"
        fontWeight="fontWeightMedium"
      >
        {props.listItem.listText}
      </Typography>
    </ListItem>
  );
}

export default SidebarItem;
