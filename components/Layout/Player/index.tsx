import { Grid, GridItem, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import PodcastInfoContainer from "./podcastInfoContainer";
import AudioInfoContainer from "./audioInfoContainer";
import VolumeSlider from "./soundSlider";
import { RootState } from "../../../store/store";

const Player = () => {
  const { podcast, podcastPictureUrl, title } = useSelector(
    (state: RootState) => state.playerSlice
  );
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
        <PodcastInfoContainer
          podcast={podcast}
          podcastPictureUrl={podcastPictureUrl}
          title={title}
        />
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
