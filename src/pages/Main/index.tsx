import { Typography } from "@mui/material";
import React from "react";
import PageGrid from "../../UI/PageGrid";
import letterList from "./letterList";
import LetterCard from "../../UI/LetterCard";
import { title } from "process";

function Main() {
  return (
    <PageGrid>
      {letterList.map((item, index) => (
        <LetterCard
          title={item.title}
          id={item.id}
          sub={item.sub}
          img={item.img}
          key={item.id}
        />
      ))}
      <Typography variant="h1">Main Page</Typography>
    </PageGrid>
  );
}

export default Main;
