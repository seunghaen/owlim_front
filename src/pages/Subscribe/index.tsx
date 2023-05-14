import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMail } from "../../api/mail";
import { MailState } from "../../slices/mail";
import { useAppDispatch } from "../../store";
import { RootState } from "../../store/reducer";
import PageGrid from "../../UI/PageGrid";
import MailTableRow from "./MailTableRow";
import MailListItem from "./MailTableRow";

function Subscribe() {
  const dispatch = useAppDispatch();
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
      <Table sx={{ minWidth: 650, marginX: "30px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>보낸사람</TableCell>
            <TableCell align="right">읽음</TableCell>
            <TableCell align="right">제목</TableCell>
            <TableCell align="right">날짜</TableCell>
            <TableCell align="right">삭제</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <TableBody sx={{ width: "100%" }}>
        {curMailList && curMailList.map((mail) => <MailTableRow mail={mail} />)}
      </TableBody>
    </PageGrid>
  );
}

export default Subscribe;
