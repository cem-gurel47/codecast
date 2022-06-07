import { Flex, Box, Text, Image } from "@chakra-ui/react";

const PodcastInfoContainer = ({
  podcastPictureUrl,
  podcast,
  title,
}: {
  podcastPictureUrl: string;
  podcast: string;
  title: string;
}) => {
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
        <Text fontWeight="bold" noOfLines={1}>
          {title}
        </Text>
        <Text noOfLines={1}>{podcast}</Text>
      </Box>
    </Flex>
  );
};

export default PodcastInfoContainer;
