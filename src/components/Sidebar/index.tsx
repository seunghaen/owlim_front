import { Box, List } from "@mui/material";
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
