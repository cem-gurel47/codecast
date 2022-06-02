import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Podcast from "../../types/podcast";

export interface PlayerState {
  id: string | null;
  isPlaying: boolean;
  isShuffling: boolean;
  isRepeating: boolean;
  audioUrl: string;
  podcast: string;
  title: string;
  podcastPictureUrl: string;
  volume: number;
  currentTime: number;
  duration: number;
}

const initialState: PlayerState = {
  id: null,
  isPlaying: false,
  isShuffling: false,
  isRepeating: false,
  audioUrl: "",
  podcast: "",
  title: "",
  podcastPictureUrl: "",
  volume: 100,
  currentTime: 0,
  duration: 0,
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
    setPodcastName: (state, action: PayloadAction<string>) => {
      state.podcast = action.payload;
    },
    setPodcastPictureUrl: (state, action: PayloadAction<string>) => {
      state.podcastPictureUrl = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    updatePodcast: (state, action: PayloadAction<Partial<Podcast>>) => {
      state.id = action.payload.id;
      state.title = action.payload.title_original;
      state.podcast = action.payload.podcast.title_original;
      state.podcastPictureUrl = action.payload.image;
      state.audioUrl = action.payload.audio;
      state.duration = action.payload.audio_length_sec;
      state.currentTime = 0;
      state.isPlaying = true;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
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
  setPodcastName,
  setPodcastPictureUrl,
  setTitle,
  setId,
  updatePodcast,
  setCurrentTime,
} = playerSlice.actions;

export default playerSlice.reducer;
