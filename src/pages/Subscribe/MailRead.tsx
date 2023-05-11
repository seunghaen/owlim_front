import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMailHtml } from "../../api/mail";
import PageGrid from "../../UI/PageGrid";

function MailRead() {
  const param = useParams();
  const [curMailHtml, setCurMailHtml] = useState<string | null>(null);
  console.log(param);
  useEffect(() => {
    async function fetchMail() {
      if (param.id) {
        const res = await getMailHtml(param.id);
        const mailHtml = res.data.html;
        setCurMailHtml(mailHtml);
      }
    }
    fetchMail();
  });
  return (
    <PageGrid>
      <div>{`${param.id}`}</div>
    </PageGrid>
  );
}

export default MailRead;
