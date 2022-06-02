import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const PodcastInfoContainer = () => {
  const { podcastPictureUrl, artist, title } = useSelector(
    (state: RootState) => state.playerSlice
  );
  return (
    <Flex maxW={{ base: "full", md: 80 }} align="center">
      <Image
        src={podcastPictureUrl}
        width="50px"
        height="50px"
        alt="podcast-image"
        fit="cover"
      />
      <Box ml={{ base: 2, md: 2, lg: 10 }}>
        <Text
          fontWeight="bold"
          noOfLines={1}
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
          }}
        >
          {title}
        </Text>
        <Text
          noOfLines={1}
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
          }}
        >
          {artist}
        </Text>
      </Box>
    </Flex>
  );
};

export default PodcastInfoContainer;
