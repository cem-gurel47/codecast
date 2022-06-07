import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import { SpotifyPodcast } from "../../types/spotify";
import PodcastCard from "./podcastCard";

const Podcasts = ({ podcasts }: { podcasts: SpotifyPodcast[] }) => {
  return (
    <Box p={10} mx={-10} bg="primary">
      <Text fontWeight="medium" fontSize="xl" color="white">
        Podcasts
      </Text>
      <Grid
        templateColumns="repeat(10,1fr)"
        templateRows="repeat(1,1fr)"
        overflowX="scroll"
        gap={6}
        mx={-10}
        p={10}
        pt={4}
      >
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.data.uri} podcast={podcast} />
        ))}
      </Grid>
    </Box>
  );
};

export default Podcasts;
