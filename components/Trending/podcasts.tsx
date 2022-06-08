import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import { SpotifyPodcast } from "../../types/spotify";
import PodcastCard from "./podcastCard";

const Podcasts = ({ podcasts }: { podcasts: SpotifyPodcast[] }) => {
  return (
    <Box
      px={{ base: 5, md: 10 }}
      mx={{ base: -5, md: -10 }}
      pt={{ base: 10, md: 10 }}
      bg="primary"
    >
      <Text fontWeight="medium" fontSize="xl" color="white">
        Podcasts
      </Text>
      <Grid
        templateColumns="repeat(10,1fr)"
        templateRows="repeat(1,1fr)"
        overflowX="scroll"
        gap={6}
        mx={{ base: -5, md: -10 }}
        p={{ base: 5, md: 10 }}
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
