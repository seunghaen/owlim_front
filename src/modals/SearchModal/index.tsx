import { Button, InputAdornment, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import modalSlice from "../../slices/modal";
import searchSlice from "../../slices/search";
import React, { useState } from "react";

export default function SearchModal() {
  const [keyword, setKeyword] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const searchSubmitHandler = () => {
    dispatch(modalSlice.actions.modalClose());
    dispatch(searchSlice.actions.searchSubmit(keyword));
    navigate("/search");
  };
  const keywordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h6" component="h2">
        검색하기
      </Typography>
      <Box
        component="form"
        onSubmit={searchSubmitHandler}
        sx={{
          pt: "5%",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          color="secondary"
          label="Search"
          variant="outlined"
          value={keyword}
          onChange={keywordChangeHandler}
          sx={{ width: "70%" }}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          size="small"
          color="secondary"
          sx={{
            mt: "10px",
            height: "35px",
          }}
        >
          상세 검색하기
        </Button>
      </Box>
      <Typography sx={{ mt: 2 }}>{keyword}</Typography>
    </Box>
  );
}
