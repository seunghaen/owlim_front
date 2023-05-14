import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import mail, { MailState } from "../../slices/mail";

type MailTableRowProp = { mail: MailState };

function MailTableRow(props: MailTableRowProp) {
  const navigate = useNavigate();
  const mailClickHandler = (id: string) => {
    navigate(`/main/subscribe/${id}`);
  };
  return (
    <TableRow
      key={props.mail.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {props.mail.sender}
      </TableCell>
      <TableCell align="right">
        {props.mail.isRead ? "읽음" : "안읽음"}
      </TableCell>
      <TableCell
        onClick={() => {
          mailClickHandler(props.mail.id);
        }}
        align="right"
      >
        {props.mail.title}
      </TableCell>
      <TableCell align="right">{props.mail.createdDate[1]}</TableCell>
      <TableCell align="right">삭제</TableCell>
    </TableRow>
  );
}

export default MailTableRow;
