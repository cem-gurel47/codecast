import { Flex } from "@chakra-ui/react";
import PlayPouseButton from "./playPouseButton";
import ShuffleButton from "./shuffleButton";
import RepeatButton from "./repeatButton";
import PrevNextButton from "./prevNextButton";
import Slider from "./slider";

const AudioInfoContainer = () => {
  return (
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
  );
};

export default AudioInfoContainer;
