import React from "react";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { Episode } from "../../types/podcast";
import EpisodeCard from "./episodeCard";

const Episodes = ({
  episodes,
  podcast,
}: {
  episodes: Episode[];
  podcast: string;
}) => {
  return (
    <Box
      py={8}
      pl={{ base: 5, md: 10 }}
      mx={{ base: -5, md: -10 }}
      mt={10}
      bg="#FAFBFE"
    >
      <Text fontWeight="medium" fontSize="xl" mb={2}>
        Episodes
      </Text>
      <Grid
        templateColumns="repeat(10,1fr)"
        templateRows="repeat(1,1fr)"
        overflowX="scroll"
        gap={6}
      >
        {episodes.map((episode) => (
          <GridItem key={episode.id}>
            <EpisodeCard episode={{ ...episode, podcast }} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Episodes;
