import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { updatePodcast } from "../../store/slices/playerSlice";
import Podcast from "../../types/podcast";

const Banner = ({
  hottestPodcastOfTheWeek,
}: {
  hottestPodcastOfTheWeek: Podcast;
}) => {
  const dispatch = useDispatch();
  const { audio, title_original, image, podcast, id, audio_length_sec } =
    hottestPodcastOfTheWeek;

  const playHottesPodcastOfTheWeek = () => {
    Cookie.set(
      "audio",
      JSON.stringify({
        audio,
        title_original,
        image,
        podcast,
        id,
        audio_length_sec,
      })
    );
    dispatch(
      updatePodcast({
        audio,
        title_original,
        image,
        podcast,
        id,
        audio_length_sec,
      })
    );
  };

  return (
    <Box maxW={{ md: "3xl" }}>
      <Text
        color="white"
        fontSize={{ base: "5xl", md: "4xl", lg: "7xl" }}
        fontWeight="medium"
        lineHeight="shorter"
      >
        The hottest coding podcasts of the week.
      </Text>
      <Text color="white" my={8} fontSize="xl" fontWeight="thin">
        Fresh coding vibes for great mood to fill your day with energy and
        passion!
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
        {/* <IconButton
          aria-label="add-to-favourites"
          ml={4}
          borderRadius={32}
          bg="transparent"
          border="1px solid white"
        >
          <Icon as={MdFavoriteBorder} color="white" />
        </IconButton> */}
        {/* <IconButton
          aria-label="add-to-favourites"
          ml={4}
          borderRadius={32}
          bg="transparent"
          border="1px solid white"
        >
          <Icon as={MdOutlineShare} color="white" />
        </IconButton> */}
      </Flex>
    </Box>
  );
};

export default Banner;
