import { useState } from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import PlayPouseButton from "./playPouseButton";
import ShuffleButton from "./shuffleButton";
import RepeatButton from "./repeatButton";
import PrevNextButton from "./prevNextButton";
import Slider from "./slider";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);

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
          <ShuffleButton
            isShuffling={isShuffling}
            setIsShuffling={setIsShuffling}
          />
          <PrevNextButton type="prev" />
          <PlayPouseButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          <PrevNextButton type="next" />
          <RepeatButton
            isRepeating={isRepeating}
            setIsRepeating={setIsRepeating}
          />
        </Flex>
        <Slider isPlaying={isPlaying} />
      </Flex>
    </Flex>
  );
};

export default Player;
