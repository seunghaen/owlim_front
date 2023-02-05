import { Box, List, ListItem, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";

type MenuItem = {
  listText: string;
  title: string;
};

const listItems: MenuItem[] = [
  {
    listText: "뉴스레터 리스트",
    title: "email",
  },
  {
    listText: "구독 목록",
    title: "subscribe",
  },
  {
    listText: "검색",
    title: "search",
  },
  {
    listText: "설정",
    title: "setting",
  },
];
function Sidebar() {
  const navigate = useNavigate();

  function iconMaker(title: string) {
    const iconSize = { fontSize: "smaill", pr: "10px" };
    switch (title) {
      case "email":
        return {
          icon: <EmailOutlinedIcon sx={iconSize} />,
          navi: () => {
            navigate("/");
          },
        };
      case "subscribe":
        return {
          icon: <ListOutlinedIcon sx={iconSize} />,
          navi: () => {
            navigate("subscribe");
          },
        };
      case "search":
        return {
          icon: <SearchOutlinedIcon sx={iconSize} />,
          navi: () => {
            navigate("search");
          },
        };
      case "setting":
        return {
          icon: <SettingsOutlinedIcon sx={iconSize} />,
          navi: () => {
            navigate("setting");
          },
        };
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
            onClick={iconMaker(listItem.title)?.navi}
          >
            {iconMaker(listItem.title)?.icon}
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
