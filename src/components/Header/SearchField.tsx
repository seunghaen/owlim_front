import { Box, InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useAppDispatch } from "../../store";
import modalSlice from "../../slices/modal";

function SearchField() {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(modalSlice.actions.modalOpen("search"));
  };

  return (
    <Box
      sx={{
        pr: "5%",
        "& > :not(style)": { m: 1 },
      }}
    >
      <TextField
        type="button"
        onClick={clickHandler}
        color="secondary"
        label="Search"
        variant="outlined"
        sx={{ width: "150px" }}
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
