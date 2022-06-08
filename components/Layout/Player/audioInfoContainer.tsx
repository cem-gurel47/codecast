import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import PlayPouseButton from "./playPouseButton";
import ShuffleButton from "./shuffleButton";
import RepeatButton from "./repeatButton";
import PrevNextButton from "./prevNextButton";
import Slider from "./slider";
import convertAudioTimeToMinutesAndSeconds from "../../../utils/convertAudioTimeToMinutesAndSeconds";
import { RootState } from "../../../store/store";

const AudioInfoContainer = () => {
  const { currentTime } = useSelector((state: RootState) => state.playerSlice);
  return (
    <Flex flexDirection="column" align="center">
      <Flex>
        <ShuffleButton />
        <PrevNextButton type="prev" />
        <PlayPouseButton />
        <PrevNextButton type="next" />
        <RepeatButton />
      </Flex>
      <Flex w="full">
        <Text fontSize="sm" ml={-6} mr={6}>
          {convertAudioTimeToMinutesAndSeconds(currentTime)}
        </Text>
        <Slider />
      </Flex>
    </Flex>
  );
};

export default AudioInfoContainer;
