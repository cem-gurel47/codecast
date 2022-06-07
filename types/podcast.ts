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

export type Episode = {
  id: string;
  audio: string;
  title: string;
  audio_length_sec: number;
  description: string;
  image: string;
  podcast: string;
  explicit_content: boolean;
  maybe_audio_invalid: boolean;
  link: string;
};

export type PodcastInfo = {
  id: string;
  description: string;
  episodes: Episode[];
  image: string;
  email: string;
  title: string;
  website: string;
  thumbnail: string;
  country: string;
  looking_for: {
    cohosts: boolean;
    cross_promotion: boolean;
    guests: boolean;
    sponsors: boolean;
  };
  publisher: string;
  total_episodes: number;
  extra: {
    amazon_music_url: string;
    google_url: string;
    spotify_url: string;
    youtube_url: string;
  };
};

export default Podcast;
