import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import mail, { MailState } from "../../slices/mail";

type MailListItemProp = { mail: MailState };

function MailListItem(props: MailListItemProp) {
  const navigate = useNavigate();
  const mailClickHandler = (id: string) => {
    navigate(`/main/subscribe/${id}`);
  };
  return (
    <>
      <ListItem sx={{ width: "100%" }}>
        <ListItemButton onClick={() => mailClickHandler(props.mail.id)}>
          <Typography>{props.mail.letterName}</Typography>
          <Typography sx={{ fontSize: "0.8rem" }}>
            {props.mail.title}
          </Typography>
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
}

export default MailListItem;
