import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import { Episode } from "../../types/spotify";
import EpisodeCatd from "./episodeCard";

const Episodes = ({ episodes }: { episodes: Episode[] }) => {
  return (
    <Box p={10} pt={0} mx={-10} pb={20} bg="primary">
      <Text fontWeight="medium" fontSize="xl" color="white">
        Episodes
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
        {episodes.map((episode) => (
          <EpisodeCatd key={episode.data.uri} episode={episode} />
        ))}
      </Grid>
    </Box>
  );
};

export default Episodes;
