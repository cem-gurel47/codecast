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
import { stopPlaying, setCurrentTime } from "../../../store/slices/playerSlice";
import convertAudioTimeToMinutesAndSeconds from "../../../utils/convertAudioTimeToMinutesAndSeconds";

const SliderComponent = () => {
  const dispatch = useDispatch();
  const [isAudioReady, setIsAudioReady] = useState(false);
  const { isPlaying, isRepeating, audioUrl, volume, currentTime, duration } =
    useSelector((state: RootState) => state.playerSlice);
  const audioRef = useRef(typeof window !== "undefined" && new Audio());
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (audioRef.current && isAudioReady) {
        if (isPlaying) {
          if (currentTime < Math.floor(duration)) {
            dispatch(setCurrentTime(currentTime + 1));
          } else {
            dispatch(setCurrentTime(duration));
            if (!isRepeating) {
              dispatch(stopPlaying());
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isPlaying, isRepeating, currentTime, audioRef, isAudioReady]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current && isAudioReady) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioRef, isAudioReady]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isRepeating;
    }
  }, [isRepeating]);

  useEffect(() => {
    if (currentTime === duration) {
      audioRef.current.currentTime = 0;
      dispatch(setCurrentTime(0));
    }
  }, [currentTime, dispatch, duration]);

  useEffect(() => {
    if (audioRef.current && audioRef.current.readyState > 0) {
      setIsAudioReady(true);
    } else {
      setIsAudioReady(false);
    }
  }, [audioRef, audioUrl]);

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
      value={currentTime}
      onChange={(v) => {
        dispatch(setCurrentTime(v));
        audioRef.current.currentTime = v;
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      max={duration}
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
        label={convertAudioTimeToMinutesAndSeconds(currentTime)}
      >
        {sliderThumb()}
      </Tooltip>
      <audio
        preload="metadata"
        src={audioUrl}
        ref={audioRef}
        onLoadedData={() => {
          setIsAudioReady(true);
        }}
      />
    </Slider>
  );
};

export default SliderComponent;
