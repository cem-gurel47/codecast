import React from "react";
import { Box, Icon, Text, Button, Flex, IconButton } from "@chakra-ui/react";
import { MdFavoriteBorder, MdOutlineShare } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  setAudioUrl,
  startPlaying,
  setPodcastName,
  setPodcastPictureUrl,
  setTitle,
  setId,
} from "../../store/slices/playerSlice";
import Podcast from "../../types/podcast";

const Banner = ({
  hottestPodcastOfTheWeek,
}: {
  hottestPodcastOfTheWeek: Podcast;
}) => {
  const dispatch = useDispatch();
  const playHottesPodcastOfTheWeek = () => {
    dispatch(setAudioUrl(hottestPodcastOfTheWeek.audio));
    dispatch(startPlaying());
    dispatch(setPodcastName(hottestPodcastOfTheWeek.podcast.title_original));
    dispatch(setPodcastPictureUrl(hottestPodcastOfTheWeek.image));
    dispatch(setTitle(hottestPodcastOfTheWeek.title_original));
    dispatch(setId(hottestPodcastOfTheWeek.id));
  };

  return (
    <Box mt={8} maxW={{ md: "3xl" }}>
      <Text
        color="white"
        fontSize="7xl"
        fontWeight="medium"
        lineHeight="shorter"
      >
        The hottest coding podcasts of the week.
      </Text>
      <Text color="white" my={8} fontSize="xl" fontWeight="thin">
        Fresh music vibes for great mood full your day with energy and passion!
      </Text>
      <Flex>
        <Button
          fontWeight="bolder"
          borderRadius={32}
          color="red.400"
          onClick={playHottesPodcastOfTheWeek}
        >
          PLAY NOW
        </Button>
        <IconButton
          aria-label="add-to-favourites"
          ml={4}
          borderRadius={32}
          bg="transparent"
          border="1px solid white"
        >
          <Icon as={MdFavoriteBorder} color="white" />
        </IconButton>
        <IconButton
          aria-label="add-to-favourites"
          ml={4}
          borderRadius={32}
          bg="transparent"
          border="1px solid white"
        >
          <Icon as={MdOutlineShare} color="white" />
        </IconButton>
      </Flex>
    </Box>
  );
};

export default Banner;
