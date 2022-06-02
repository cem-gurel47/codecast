import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PlayerState {
  id: string | null;
  isPlaying: boolean;
  isShuffling: boolean;
  isRepeating: boolean;
  audioUrl: string;
  artist: string;
  title: string;
  podcastPictureUrl: string;
  volume: number;
}

const initialState: PlayerState = {
  id: null,
  isPlaying: false,
  isShuffling: false,
  isRepeating: false,
  audioUrl: "",
  artist: "Podcast Name Here",
  title: "Artist Name Here",
  podcastPictureUrl: "https://picsum.photos/200",
  volume: 100,
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
    setAudioUrl: (state, action: PayloadAction<string>) => {
      state.audioUrl = action.payload;
    },
    changeVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

export const {
  startPlaying,
  stopPlaying,
  toggleRepeat,
  toggleShuffle,
  togglePlay,
  setAudioUrl,
  changeVolume,
} = playerSlice.actions;

export default playerSlice.reducer;
