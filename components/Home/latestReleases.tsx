import React from "react";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import PodcastCard from "./podcastCard";

const LatestReleases = () => {
  return (
    <Box py={8} px={10} mx={-10} mt={10} bg="#FAFBFE">
      <Text fontWeight="medium" fontSize="xl" mb={2}>
        Latest releases
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        templateRows="repeat(3,1fr)"
        gap={6}
      >
        <GridItem>
          <PodcastCard />
        </GridItem>
        <GridItem>
          <PodcastCard />
        </GridItem>
        <GridItem>
          <PodcastCard />
        </GridItem>
        <GridItem>
          <PodcastCard />
        </GridItem>
        <GridItem>
          <PodcastCard />
        </GridItem>
        <GridItem>
          <PodcastCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default LatestReleases;
