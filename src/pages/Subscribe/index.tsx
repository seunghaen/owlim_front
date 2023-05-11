import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMail } from "../../api/mail";
import { MailState } from "../../slices/mail";
import { useAppDispatch } from "../../store";
import { RootState } from "../../store/reducer";
import PageGrid from "../../UI/PageGrid";
import MailListItem from "./MailListItem";

function Subscribe() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [curMailList, setCurMailList] = useState<MailState[] | null>(null);
  useEffect(() => {
    dispatch(getMail());
  }, [dispatch]);
  const mailList = useSelector((state: RootState) => state.mail.mailList);
  useEffect(() => {
    setCurMailList(mailList);
  }, [mailList]);
  console.log(curMailList);

  return (
    <PageGrid>
      <List>
        {curMailList && curMailList.map((mail) => <MailListItem mail={mail} />)}
      </List>
    </PageGrid>
  );
}

export default Subscribe;
