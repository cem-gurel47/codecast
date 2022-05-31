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

const SliderComponent = () => {
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state: RootState) => state.playerSlice);
  const audioRef = useRef(typeof window !== "undefined" && new Audio());
  const [sliderValue, setSliderValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [max, setMax] = useState(100);

  const convertAudioTimeToMinutesAndSeconds = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) {
        if (sliderValue < Math.floor(max)) {
          setSliderValue((sliderVal) => sliderVal + 1);
        } else {
          setSliderValue(max);
          dispatch(stopPlaying());
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch, isPlaying, max, sliderValue]);

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
    setMax(audioRef.current.duration);
  }, [audioRef.current.duration]);

  useEffect(() => {
    if (sliderValue === max) {
      audioRef.current.currentTime = 0;
      setSliderValue(0);
    }
  }, [sliderValue, max]);

  return (
    <Slider
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
      <SliderThumb boxSize={6}>
        <Box color="tomato" as={MdGraphicEq} />
      </SliderThumb>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={convertAudioTimeToMinutesAndSeconds(sliderValue)}
      >
        <SliderThumb boxSize={6}>
          <Box color="tomato" as={MdGraphicEq} />
        </SliderThumb>
      </Tooltip>
      <audio
        preload="metadata"
        src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
        ref={audioRef}
      />
    </Slider>
  );
};

export default SliderComponent;
