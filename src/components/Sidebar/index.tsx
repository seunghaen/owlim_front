import { Box, List, ListItem, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const listItems = [
  {
    listText: "뉴스레터 리스트",
    icon: "email",
  },
  {
    listText: "구독 목록",
    icon: "list",
  },
];
function Sidebar() {
  function iconMaker(icon: string) {
    const size = { fontSize: "smaill", pr: "10px" };
    switch (icon) {
      case "email":
        return <EmailOutlinedIcon sx={size} />;
      case "list":
        return <ListOutlinedIcon sx={size} />;
    }
  }
  return (
    <Box
      sx={{ top: "64px", left: "0px", height: "100vh", width: "200px" }}
      position="fixed"
      bgcolor="primary.main"
    >
      <List sx={{ mt: "80px" }}>
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
      </List>
    </Box>
  );
}

export default Sidebar;
