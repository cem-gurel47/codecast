import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const PodcastCard = () => {
  return (
    <Flex align="center" borderRadius={6} bg="#fff" p={4}>
      <Image
        src="https://picsum.photos/200"
        width="50px"
        height="50px"
        alt="podcast-image"
        fit="cover"
      />
    </Flex>
  );
};

export default PodcastCard;
