import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import RecommendedPodcastCard from "./recommendedPodcastCard";
import { BestPodcast } from "../../types/podcast";

const RecommendedPodcasts = ({
  recommendedPodcasts,
}: {
  recommendedPodcasts: BestPodcast[];
}) => {
  return (
    <Box py={8} px={10} mx={-10} pb={40} mb={-20} bg="#FAFBFE">
      <Text fontWeight="medium" fontSize="xl" mb={2}>
        Recommended podcasts
      </Text>
      <SimpleGrid minChildWidth="150px" gap={6}>
        {recommendedPodcasts.map((podcast) => (
          <RecommendedPodcastCard key={podcast.id} info={podcast} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RecommendedPodcasts;
