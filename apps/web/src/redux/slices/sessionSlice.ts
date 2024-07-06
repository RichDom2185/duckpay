import { createSlice } from "@reduxjs/toolkit";

type SessionState = {
  theme: "light" | "dark" | "auto";
};

const defaultSession: SessionState = {
  theme: "auto",
};

const sessionSlice = createSlice({
  name: "session",
  initialState: defaultSession,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const SessionActions = sessionSlice.actions;

export default sessionSlice.reducer;
