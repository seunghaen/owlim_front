import { combineReducers } from "redux";
import modalSlice from "../slices/modal";

import searchSlice from "../slices/search";

const rootReducer = combineReducers({
  search: searchSlice.reducer,
  modal: modalSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
