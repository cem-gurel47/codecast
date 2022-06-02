/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useEffect, useRef } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { MdGraphicEq } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { stopPlaying } from "../../../store/slices/playerSlice";
import convertAudioTimeToMinutesAndSeconds from "../../../utils/convertAudioTimeToMinutesAndSeconds";

const SliderComponent = () => {
  const dispatch = useDispatch();
  const { isPlaying, isRepeating, audioUrl, volume } = useSelector(
    (state: RootState) => state.playerSlice
  );
  const audioRef = useRef(typeof window !== "undefined" && new Audio());
  const [sliderValue, setSliderValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [max, setMax] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) {
        if (sliderValue < Math.floor(max)) {
          setSliderValue((sliderVal) => sliderVal + 1);
        } else {
          setSliderValue(max);
          if (!isRepeating) {
            dispatch(stopPlaying());
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch, isPlaying, isRepeating, max, sliderValue]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isRepeating;
    }
  }, [isRepeating]);

  useEffect(() => {
    if (audioRef.current && audioRef.current.duration) {
      setMax(audioRef.current.duration);
    }
  }, [audioRef.current.duration, audioUrl]);

  useEffect(() => {
    if (sliderValue === max) {
      audioRef.current.currentTime = 0;
      setSliderValue(0);
    }
  }, [sliderValue, max]);

  const sliderThumb = () => {
    return (
      <SliderThumb boxSize={6}>
        <Box color="blue.300" as={MdGraphicEq} />
      </SliderThumb>
    );
  };

  return (
    <Slider
      minW="160px"
      aria-label="player"
      value={sliderValue}
      onChange={(v) => {
        setSliderValue(v);
        audioRef.current.currentTime = v;
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      max={max}
    >
      <SliderTrack bg="primary">
        <SliderFilledTrack bg="blue.300" />
      </SliderTrack>
      {sliderThumb()}

      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={convertAudioTimeToMinutesAndSeconds(sliderValue)}
      >
        {sliderThumb()}
      </Tooltip>
      <audio preload="metadata" src={audioUrl} ref={audioRef} />
    </Slider>
  );
};

export default SliderComponent;
