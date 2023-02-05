import { createSlice } from "@reduxjs/toolkit";

interface Search {
  value: string | null;
}
const initialState: Search = {
  value: null,
};
const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    searchSubmit: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default searchSlice;
