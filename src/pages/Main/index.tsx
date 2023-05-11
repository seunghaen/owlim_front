import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageGrid from "../../UI/PageGrid";
import LetterCard from "../../UI/LetterCard";
import axios from "axios";
import { LetterType } from "../../slices/letter";
import { useAppDispatch } from "../../store";
import { refreshToken } from "../../api/auth";
import { getLetter } from "../../api/letter";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";

function Main() {
  const dispatch = useAppDispatch();
  const [curLetterList, setCurLetterList] = useState<LetterType[] | null>(null);
  const [value, setValue] = useState<LetterType["type"]>(null);
  const handleChange = (
    event: React.SyntheticEvent,
    newValue: LetterType["type"]
  ) => {
    setValue(newValue);
  };
  const letterList = useSelector((state: RootState) => state.letter.letterList);
  useEffect(() => {
    if (letterList.length === 0) {
      dispatch(getLetter());
    }
  }, [dispatch]);
  useEffect(() => {
    setCurLetterList(letterList);
  }, [letterList]);
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
      {curLetterList &&
        curLetterList.map((item, index) =>
          value ? (
            item.type === value && <LetterCard item={item} key={index} />
          ) : (
            <LetterCard item={item} key={index} />
          )
        )}
      {/* <button
        onClick={async () => {
          dispatch(refreshToken());
        }}
      >
        test
      </button> */}
      <button
        onClick={async () => {
          const res = await axios.get("http://localhost:8001/email/get");
          console.log(res.data);
        }}
      >
        다른 테스트
      </button>
    </PageGrid>
  );
}

export default Main;
