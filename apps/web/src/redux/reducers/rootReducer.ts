import { combineReducers } from "@reduxjs/toolkit";
import sessionReducer from "../slices/sessionSlice";

export const rootReducer = combineReducers({
  session: sessionReducer,
});
