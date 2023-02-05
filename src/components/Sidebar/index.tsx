import { Box, List, ListItem, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarItem, { SidebarMenuItem } from "./SidebarItem";

const listItems: SidebarMenuItem[] = [
  {
    listText: "뉴스레터 리스트",
    path: "/",
  },
  {
    listText: "구독 목록",
    path: "/subscribe",
  },
  {
    listText: "검색",
    path: "/search",
  },
  {
    listText: "설정",
    path: "/setting",
  },
];
function Sidebar() {
  return (
    <Box
      sx={{ top: "60px", left: "0px", height: "100vh", width: "200px" }}
      position="fixed"
      bgcolor="primary.main"
    >
      <List sx={{ mt: "80px", flexDirection: "column" }}>
        {listItems.map((listItem, index) => (
          <SidebarItem key={index} listItem={listItem} />
        ))}
        <Box sx={{ flexGrow: 1 }}></Box>
      </List>
    </Box>
  );
}

export default Sidebar;
