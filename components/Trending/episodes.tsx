import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import { Episode } from "../../types/spotify";
import EpisodeCatd from "./episodeCard";

const Episodes = ({ episodes }: { episodes: Episode[] }) => {
  return (
    <Box
      px={{ base: 5, md: 10 }}
      mx={{ base: -5, md: -10 }}
      pt={{ base: 10, md: 10 }}
      pb={{ base: 28, md: 40 }}
      bg="primary"
    >
      <Text fontWeight="medium" fontSize="xl" color="white">
        Episodes
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
        {episodes.map((episode) => (
          <EpisodeCatd key={episode.data.uri} episode={episode} />
        ))}
      </Grid>
    </Box>
  );
};

export default Episodes;
