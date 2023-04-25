import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { RootState } from "../../store/reducer";
import PageGrid from "../../UI/PageGrid";
import searchSlice from "../../slices/search";
import React, { useEffect, useState } from "react";

function SearchPage() {
  const dispatch = useAppDispatch();
  const searchValue = useSelector((state: RootState) => state.search.value);
  const [text, setText] = useState<string | null>(searchValue);
  const textChangeHandler: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    return () => {
      dispatch(searchSlice.actions.searchSubmit(null));
    };
  }, [dispatch]);
  return (
    <PageGrid>
      <Box sx={{ pt: "10px" }}>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          "{text}" 상세검색결과
        </Typography>
      </Box>
    </PageGrid>
  );
}

export default SearchPage;
