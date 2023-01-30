import { Box, List, ListItem, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

type ListItem = {
  listText: string;
  icon: string;
};

const listItems: ListItem[] = [
  {
    listText: "뉴스레터 리스트",
    icon: "email",
  },
  {
    listText: "구독 목록",
    icon: "list",
  },
  {
    listText: "설정",
    icon: "setting",
  },
];
function Sidebar() {
  function iconMaker(icon: string) {
    const iconSize = { fontSize: "smaill", pr: "10px" };
    switch (icon) {
      case "email":
        return <EmailOutlinedIcon sx={iconSize} />;
      case "list":
        return <ListOutlinedIcon sx={iconSize} />;
      case "setting":
        return <SettingsOutlinedIcon sx={iconSize} />;
    }
  }
  return (
    <Box
      sx={{ top: "60px", left: "0px", height: "100vh", width: "200px" }}
      position="fixed"
      bgcolor="primary.main"
    >
      <List sx={{ mt: "80px", flexDirection: "column" }}>
        {listItems.map((listItem, index) => (
          <ListItem
            sx={{ mt: "10px", ml: "10px", width: "180px" }}
            button
            key={index}
          >
            {iconMaker(listItem.icon)}
            <Typography variant="body2" fontWeight="fontWeightMedium">
              {listItem.listText}
            </Typography>
          </ListItem>
        ))}
        <Box sx={{ flexGrow: 1 }}></Box>
      </List>
    </Box>
  );
}

export default Sidebar;
