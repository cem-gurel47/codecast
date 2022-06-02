import React, { useState } from "react";
import { Flex, IconButton, Icon, Text } from "@chakra-ui/react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  startPlaying,
  stopPlaying,
  setAudioUrl,
} from "../../store/slices/playerSlice";
import PodcastInfoContainer from "../Layout/Player/podcastInfoContainer";

const PodcastCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const src = "";
  const { isPlaying } = useSelector((state: RootState) => state.playerSlice);

  return (
    <Flex
      align="center"
      borderRadius={10}
      bg="#fff"
      p={4}
      justifyContent="space-between"
    >
      <Flex align="center">
        {isPlaying ? (
          <IconButton
            mr={4}
            justifyContent="center"
            alignItems="center"
            variant="unstyled"
            aria-label="pause"
            icon={<Icon as={BsFillPauseFill} fontSize="40px" />}
            onClick={() => dispatch(stopPlaying())}
          />
        ) : (
          <IconButton
            mr={4}
            variant="unstyled"
            aria-label="play"
            icon={<Icon as={BsFillPlayFill} fontSize="40px" />}
            onClick={() => {
              dispatch(startPlaying());
              dispatch(setAudioUrl(src));
            }}
          />
        )}
        <PodcastInfoContainer />
      </Flex>
      <Flex align="center">
        <Text ml={20}>3:44</Text>
        <IconButton
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="add-to-favourites"
          ml={4}
          borderRadius={32}
          bg="transparent"
          border="1px solid white"
          icon={
            <Icon
              as={isFavorite ? MdFavorite : MdFavoriteBorder}
              color="blue.300"
            />
          }
        />
      </Flex>
    </Flex>
  );
};

export default PodcastCard;
