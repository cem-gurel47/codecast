import { Flex, Box, Text, Image } from "@chakra-ui/react";
import PlayPouseButton from "./playPouseButton";
import ShuffleButton from "./shuffleButton";
import RepeatButton from "./repeatButton";
import PrevNextButton from "./prevNextButton";
import Slider from "./slider";

const Player = () => {
  return (
    <Flex
      height={20}
      w="100vw"
      backdropFilter="blur(10px)"
      position="fixed"
      bottom="0"
      left="0"
      bgImage="linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255))"
      px={8}
      align="center"
      justify="space-between"
    >
      <Flex maxW={80} align="center">
        <Image
          src="Logo.png"
          width="50px"
          height="50px"
          alt="avatar"
          fit="cover"
        />
        <Box ml={10}>
          <Text fontWeight="bold">Podcast Name</Text>
          <Text>Artist</Text>
        </Box>
      </Flex>
      <Flex flexDirection="column" align="center">
        <Flex>
          <ShuffleButton />
          <PrevNextButton type="prev" />
          <PlayPouseButton />
          <PrevNextButton type="next" />
          <RepeatButton />
        </Flex>
        <Slider />
      </Flex>
    </Flex>
  );
};

export default Player;
