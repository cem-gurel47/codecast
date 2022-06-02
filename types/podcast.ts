type Podcast = {
  id: string;
  audio: string;
  audio_length_sec: number;
  image: string;
  thumbnail: string;
  title_original: string;
  description_original: string;
  podcast: {
    genre_ids: number[];
    id: string;
    title_original: string;
  };
};

export type BestPodcast = {
  id: string;
  image: string;
  title_original: string;
  description_original: string;
};

export default Podcast;
