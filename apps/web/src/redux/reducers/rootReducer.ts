import { combineReducers } from "@reduxjs/toolkit";
import sessionReducer from "../slices/sessionSlice";
import splitReducer from "../slices/splitSlice";

export const rootReducer = combineReducers({
  session: sessionReducer,
  split: splitReducer
});
