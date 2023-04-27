import { combineReducers } from "redux";
import letterSlice from "../slices/letter";
import modalSlice from "../slices/modal";

import searchSlice from "../slices/search";
import userSlice from "../slices/user";

const rootReducer = combineReducers({
  search: searchSlice.reducer,
  modal: modalSlice.reducer,
  user: userSlice.reducer,
  letter: letterSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
