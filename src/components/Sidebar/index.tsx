import { Grid, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  sidebar: {
    backgroundColor: "yellow",
    width: 160,
  },
});

const listItems = [
  {
    listText: "뉴스레터 리스트",
  },
  {
    listText: "구독 목록",
  },
  {
    listText: "Portfolio",
  },
  {
    listText: "Contacts",
  },
];
function Sidebar() {
  const classes = useStyles();
  return (
    <Grid className={classes.sidebar}>
      <List>
        {listItems.map((listItem, index) => (
          <ListItem button key={index}>
            <ListItemText primary={listItem.listText} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export default Sidebar;
