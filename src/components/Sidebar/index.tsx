import { Box, List } from "@mui/material";
import SidebarItem, { SidebarMenuItem } from "./SidebarItem";

const listItems: SidebarMenuItem[] = [
  {
    listText: "뉴스레터 리스트",
    path: "/main",
  },
  {
    listText: "구독 목록",
    path: "/main/subscribe",
  },
  {
    listText: "설정",
    path: "/main/setting",
  },
  {
    listText: "관리자",
    path: "/main/admin",
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
