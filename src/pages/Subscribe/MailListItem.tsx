import { ListItem, ListItemButton, ListItemText } from "@mui/material";
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
    <ListItem>
      <ListItemButton onClick={() => mailClickHandler(props.mail.id)}>
        <ListItemText primary={props.mail.title} />
      </ListItemButton>
    </ListItem>
  );
}

export default MailListItem;
