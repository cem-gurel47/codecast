import React from "react";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import PodcastCard from "./podcastCard";
import Podcast from "../../types/podcast";

const LatestReleases = ({ latestReleases }: { latestReleases: Podcast[] }) => {
  return (
    <Box
      py={8}
      px={{ base: 5, md: 10 }}
      mx={{ base: -5, md: -10 }}
      mt={10}
      bg="#FAFBFE"
    >
      <Text fontWeight="medium" fontSize="xl" mb={2}>
        Latest releases
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        templateRows="repeat(3,1fr)"
        gap={6}
      >
        {latestReleases.map((podcast) => (
          <GridItem key={podcast.id}>
            <PodcastCard podcast={podcast} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestReleases;
