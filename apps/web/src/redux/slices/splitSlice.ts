import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SplitState = {
  isSplitMode: boolean;
  isModalOpen: boolean;
  selectedTokenId: string | null;
  selectedTokenAmount: number | null;
};

const initialState: SplitState = {
  isSplitMode: false,
  isModalOpen: false,
  selectedTokenId: null,
  selectedTokenAmount: null
};

const splitSlice = createSlice({
  name: "split",
  initialState,
  reducers: {
    toggleSplitMode(state) {
      state.isSplitMode = !state.isSplitMode;
      if (!state.isSplitMode) {
        state.isModalOpen = false;
        state.selectedTokenId = null;
        state.selectedTokenAmount = null;
      }
    },
    openSplitModal(
      state,
      action: PayloadAction<{ tokenId: string; tokenAmount: number }>
    ) {
      state.isModalOpen = true;
      state.selectedTokenId = action.payload.tokenId;
      state.selectedTokenAmount = action.payload.tokenAmount;
    },
    closeSplitModal(state) {
      state.isModalOpen = false;
      state.selectedTokenId = null;
      state.selectedTokenAmount = null;
    }
  }
});

export const SplitActions = splitSlice.actions;

export default splitSlice.reducer;
