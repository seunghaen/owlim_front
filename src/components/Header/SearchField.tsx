import { Box, InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useAppDispatch } from "../../store";
import searchSlice from "../../slices/search";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchField() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string | null>(null);

  const searchHander: React.FormEventHandler = (event) => {
    event.preventDefault();
    dispatch(searchSlice.actions.searchSubmit(text));
    navigate("search");
    setText("");
  };
  const textHandler: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setText(event.target.value);
  };

  return (
    <Box
      component="form"
      onSubmit={searchHander}
      sx={{
        pr: "5%",
        "& > :not(style)": { m: 1 },
      }}
    >
      <TextField
        value={text}
        onChange={textHandler}
        color="secondary"
        label="Search"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SearchField;
