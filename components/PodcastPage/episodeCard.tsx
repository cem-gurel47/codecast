/* eslint-disable react/no-danger */
import React from "react";
import {
  Center,
  Box,
  Heading,
  useColorModeValue,
  Text,
  Badge,
  Stack,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Episode } from "../../types/podcast";
import convertAudioTimeToMinutesAndSeconds from "../../utils/convertAudioTimeToMinutesAndSeconds";
import { updatePodcast } from "../../store/slices/playerSlice";

const EpisodeCard = ({ episode }: { episode: Episode }) => {
  const dispatch = useDispatch();

  const playEpisode = () => {
    dispatch(
      updatePodcast({
        ...episode,
        title_original: episode.title,
        podcast: {
          title_original: episode.podcast,
        },
      })
    );
  };

  return (
    <Center py={6} minW="350px">
      <Box
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        rounded="lg"
        p={6}
        textAlign="center"
      >
        <Image src={episode.image} mb={2} loading="lazy" />
        <Heading fontSize="2xl" fontFamily="body" noOfLines={2} mb={2}>
          {episode.title}
        </Heading>

        <Text
          textAlign="center"
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
          noOfLines={5}
          mb={2}
        >
          <div dangerouslySetInnerHTML={{ __html: episode.description }} />
        </Text>

        <Flex align="center" justify="space-around" direction="row">
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight="400"
          >
            {convertAudioTimeToMinutesAndSeconds(episode.audio_length_sec)}
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight="400"
          >
            #{episode.explicit_content ? "Explicit" : "Clean"}
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight="400"
          >
            #{episode.maybe_audio_invalid ? "Invalid" : "Valid"}
          </Badge>
        </Flex>

        <Stack direction="row" spacing={4} justify="space-between">
          <Button
            mt={4}
            as="a"
            href={episode.link}
            target="_blank"
            rel="noreferrer"
            flex={1}
            fontSize="sm"
            rounded="full"
            _focus={{
              bg: "gray.200",
            }}
          >
            Visit
          </Button>
          <Button
            sx={{
              marginTop: "16px !important",
            }}
            onClick={playEpisode}
            flex={1}
            fontSize="sm"
            rounded="full"
            bg="blue.400"
            color="white"
            boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Play
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default EpisodeCard;
