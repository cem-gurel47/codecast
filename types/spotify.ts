type Source = {
  height: number;
  width: number;
  url: string;
};

export type Artist = {
  data: {
    profile: {
      name: string;
    };
    uri: string;
    visuals: {
      avatarImage: {
        sources: Source[];
      };
    };
  };
};

export type SpotifyPodcast = {
  data: {
    coverArt: {
      sources: Source[];
    };
    name: string;
    publisher: {
      name: string;
    };
    uri: string;
  };
};

export type Episode = {
  data: {
    coverArt: {
      sources: Source[];
    };
    description: string;
    duration: number;
    name: string;
    releaseDate: {
      isoString: string;
    };
    uri: string;
  };
};
