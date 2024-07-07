import { createSlice } from "@reduxjs/toolkit";

type SessionState = {
  theme: "light" | "dark" | "auto";
  /**
   * Whether the session has timed out.
   * true: The session has timed out. Consumers to set to false after handling.
   * false: The session has not timed out.
   * undefined: The session is potentially in a timed out state (modal shown, etc.)
   */
  isTimeout: boolean | undefined;
};

const defaultSession: SessionState = {
  theme: "auto",
  isTimeout: false
};

const sessionSlice = createSlice({
  name: "session",
  initialState: defaultSession,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setTimeout(state, action) {
      state.isTimeout = action.payload;
    },
    triggerTimeout(state) {
      state.isTimeout = undefined;
    }
  }
});

export const SessionActions = sessionSlice.actions;

export default sessionSlice.reducer;
