import { Grid, GridItem, Flex } from "@chakra-ui/react";
import PodcastInfoContainer from "./podcastInfoContainer";
import AudioInfoContainer from "./audioInfoContainer";
import VolumeSlider from "./soundSlider";

const Player = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3, 1fr)" }}
      // templateRows={{ base: "repeat(3,1fr)", md: "repeat(1,1fr)" }}
      gap={6}
      height={{ base: 20, md: 20 }}
      w="100vw"
      backdropFilter="blur(10px)"
      position="fixed"
      bottom="0"
      left="0"
      bgImage="linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255))"
      px={8}
    >
      <GridItem alignSelf="center" display={{ base: "none", md: "grid" }}>
        <PodcastInfoContainer />
      </GridItem>
      <GridItem alignSelf="center">
        <AudioInfoContainer />
      </GridItem>
      <GridItem alignSelf="center" display={{ base: "none", md: "grid" }}>
        <Flex justify="center">
          <VolumeSlider />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Player;
