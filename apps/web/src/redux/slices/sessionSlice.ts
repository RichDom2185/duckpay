import { createSlice } from "@reduxjs/toolkit";
import { Token } from "../../types/types";

type SessionState = {
  theme: "light" | "dark" | "auto";
  accountId: string | null;
  tokens: Token[] | undefined;
};

const defaultSession: SessionState = {
  theme: "auto",
  accountId: null,
  tokens: undefined
};

const sessionSlice = createSlice({
  name: "session",
  initialState: defaultSession,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setAccountId(state, action) {
      state.accountId = action.payload;
    },
    setTokens(state, action) {
      state.tokens = action.payload;
    },
    addToken(state, action) {
      if (state.tokens) {
        state.tokens.push(action.payload);
        return;
      }
      state.tokens = [action.payload];
    },
    addMultipleTokens(state, action) {
      const tokensToAdd: Token[] = action.payload;
      if (state.tokens) {
        state.tokens.push(...tokensToAdd);
        return;
      } else {
        state.tokens = tokensToAdd;
      }
    },
    removeTokens(state, action) {
      const tokenIdsToRemove: string[] = action.payload;
      state.tokens = state.tokens?.filter(
        (token) => !tokenIdsToRemove.includes(token.id)
      );
    }
  }
});

export const SessionActions = sessionSlice.actions;

export default sessionSlice.reducer;
