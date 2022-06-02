import React, { useState } from "react";
import { Box, Image, Icon, IconButton, Center } from "@chakra-ui/react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  startPlaying,
  stopPlaying,
  setAudioUrl,
} from "../../store/slices/playerSlice";

const RecommendedPodcastCard = () => {
  const dispatch = useDispatch();
  const src = "";
  const { isPlaying } = useSelector((state: RootState) => state.playerSlice);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  return (
    <Box
      borderRadius={32}
      cursor="pointer"
      onMouseEnter={() => setButtonsVisible(true)}
      onMouseLeave={() => setButtonsVisible(false)}
      position="relative"
    >
      <Image
        src="https://picsum.photos/200"
        alt="recommended-podcast"
        width="200px"
        height="200px"
        objectFit="cover"
        borderRadius={32}
      />
      <Center
        position="absolute"
        top={0}
        left={0}
        display={buttonsVisible ? "flex" : "none"}
        width="100%"
        height="100%"
        p={4}
        bg="rgba(0,0,0,0.5)"
        borderRadius={32}
      >
        <IconButton
          _hover={{
            backgroundColor: "primary",
          }}
          variant="unstyled"
          aria-label="play"
          icon={
            <Icon
              as={isPlaying ? BsFillPauseFill : BsFillPlayFill}
              fontSize="40px"
              color="white"
            />
          }
          onClick={() => {
            if (isPlaying) {
              dispatch(stopPlaying());
            } else {
              dispatch(startPlaying());
              dispatch(setAudioUrl(src));
            }
          }}
        />
      </Center>
    </Box>
  );
};

export default RecommendedPodcastCard;
