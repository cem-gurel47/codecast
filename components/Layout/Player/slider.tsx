import { useState, useEffect } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { MdGraphicEq } from "react-icons/md";

const SliderComponent = ({ isPlaying }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) {
        setSliderValue((sliderVal) => sliderVal + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <Slider
      aria-label="player"
      value={sliderValue}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderTrack bg="primary">
        <SliderFilledTrack bg="blue.300" />
      </SliderTrack>
      <SliderThumb boxSize={6}>
        <Box color="tomato" as={MdGraphicEq} />
      </SliderThumb>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${sliderValue}`}
      >
        <SliderThumb boxSize={6}>
          <Box color="tomato" as={MdGraphicEq} />
        </SliderThumb>
      </Tooltip>
    </Slider>
  );
};

export default SliderComponent;
