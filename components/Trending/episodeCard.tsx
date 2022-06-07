import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Episode } from "../../types/spotify";

const episodeCard = ({ episode }: { episode: Episode }) => {
  const { data } = episode;
  const { coverArt, name, description, uri } = data;

  const convertPodcastUriToUrl = () => {
    const url = uri.split(":");
    const result = `https://open.spotify.com/embed/${url[1]}/${url[2]}`;
    window.open(result, "_blank");
  };

  return (
    <Box
      minW="300px"
      rounded="2xl"
      p={4}
      bg="black"
      cursor="pointer"
      transition="0.2s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
      }}
      onClick={convertPodcastUriToUrl}
    >
      <Image
        src={coverArt?.sources[1]?.url}
        alt={name}
        w="100%"
        h="auto"
        fallbackSrc="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      />
      <Text mt={2} color="white" noOfLines={2}>
        {name}
      </Text>
      <Text mt={2} color="gray.600" noOfLines={1}>
        {description}
      </Text>
    </Box>
  );
};

export default episodeCard;
