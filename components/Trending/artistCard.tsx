import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Artist } from "../../types/spotify";

const artistCard = ({ artist }: { artist: Artist }) => {
  const { data } = artist;
  const { visuals, profile } = data;

  const convertUriToUrl = (uri: string) => {
    const url = uri.split(":");
    const result = `https://open.spotify.com/embed/${url[1]}/${url[2]}`;
    window.open(result, "_blank");
  };

  return (
    <Box
      minW="200px"
      rounded="2xl"
      p={4}
      bg="primary"
      cursor="pointer"
      transition="0.2s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
      }}
      onClick={() => {
        convertUriToUrl(artist.data.uri);
      }}
    >
      <Image
        rounded="full"
        src={visuals.avatarImage?.sources[0].url}
        alt={profile.name}
        fallbackSrc="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      />
      <Text mt={2} color="white" noOfLines={2}>
        {profile.name}
      </Text>
    </Box>
  );
};

export default artistCard;
