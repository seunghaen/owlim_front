import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import PageGrid from "../../UI/PageGrid";
import letterList, { LetterType } from "./letterList";
import LetterCard from "../../UI/LetterCard";
import axios from "axios";
import { useAppDispatch } from "../../store";
import { refreshToken } from "../../api/auth";

function Main() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<LetterType["type"]>(null);
  const handleChange = (
    event: React.SyntheticEvent,
    newValue: LetterType["type"]
  ) => {
    setValue(newValue);
  };
  return (
    <PageGrid>
      <Box bgcolor="white" sx={{ width: "90%", my: "20px" }}>
        <Tabs
          value={value}
          variant="fullWidth"
          centered
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          textColor="secondary"
        >
          <Tab value={null} label="전체" />
          <Tab value="경제" label="경제" />
          <Tab value="시사" label="시사" />
          <Tab value="취미" label="취미" />
        </Tabs>
      </Box>
      {letterList.map((item, index) =>
        value ? (
          item.type === value && <LetterCard item={item} key={index} />
        ) : (
          <LetterCard item={item} key={index} />
        )
      )}
      <button
        onClick={async () => {
          dispatch(refreshToken());
        }}
      >
        test
      </button>
      <button
        onClick={() => {
          axios.get("http://localhost:8001/sample");
        }}
      >
        다른 테스트
      </button>
    </PageGrid>
  );
}

export default Main;
