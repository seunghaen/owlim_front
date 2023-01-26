import { Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  sidebar: {
    backgroundColor: "#1976d2",
    height: "100vh",
    position: "fixed",
    width: 150,
    borderRight: "1px solid #e9ecef",
  },
  button: { height: 50, width: "100%" },
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
      <Button className={classes.button}>올림</Button>
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
