import { createSlice } from "@reduxjs/toolkit";

export interface PlayerState {
  isPlaying: boolean;
  isShuffling: boolean;
  isRepeating: boolean;
}

const initialState: PlayerState = {
  isPlaying: false,
  isShuffling: false,
  isRepeating: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    startPlaying: (state) => {
      state.isPlaying = true;
    },
    stopPlaying: (state) => {
      state.isPlaying = false;
    },
    toggleShuffle: (state) => {
      state.isShuffling = !state.isShuffling;
    },
    toggleRepeat: (state) => {
      state.isRepeating = !state.isRepeating;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const {
  startPlaying,
  stopPlaying,
  toggleRepeat,
  toggleShuffle,
  togglePlay,
} = playerSlice.actions;

export default playerSlice.reducer;
