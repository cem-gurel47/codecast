/* eslint-disable no-nested-ternary */
import { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Flex,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import {
  ImVolumeMute2,
  ImVolumeLow,
  ImVolumeMedium,
  ImVolumeHigh,
} from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { changeVolume } from "../../../store/slices/playerSlice";

const VolumeSlider = () => {
  const dispatch = useDispatch();
  const { volume } = useSelector((state: RootState) => state.playerSlice);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Flex align="center" justifyContent="space-between" w={48}>
      <Icon
        as={
          volume === 0
            ? ImVolumeMute2
            : volume < 33
            ? ImVolumeLow
            : volume < 66
            ? ImVolumeMedium
            : ImVolumeHigh
        }
      />
      <Slider
        aria-label="slider-ex-4"
        max={100}
        maxW={40}
        value={volume}
        onChange={(v) => dispatch(changeVolume(v))}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack bg="primary">
          <SliderFilledTrack bg="blue.300" />
        </SliderTrack>
        <SliderThumb>
          <Box color="tomato" />
        </SliderThumb>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${Math.floor(volume)}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Flex>
  );
};

export default VolumeSlider;
