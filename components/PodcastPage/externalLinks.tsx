import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  List,
  ListItem,
  useColorModeValue,
  Button,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { MdOutlineOpenInNew } from "react-icons/md";
import { BsYoutube, BsSpotify } from "react-icons/bs";
import { AiOutlineAmazon } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { PodcastInfo } from "../../types/podcast";

const ExternalLinks = ({ data }: { data: PodcastInfo }) => {
  const { extra } = data;
  const { youtube_url, amazon_music_url, google_url, spotify_url } = extra;
  return (
    <Box>
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        fontWeight="500"
        textTransform="uppercase"
        mb="4"
      >
        External Links
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <List spacing={2}>
          <ListItem>
            <Button
              w="100%"
              as="a"
              href={data.website}
              target="_blank"
              rel="noreferrer"
            >
              <Flex align="center">
                Website
                <Icon as={MdOutlineOpenInNew} ml={2} />
              </Flex>
            </Button>
          </ListItem>
          {youtube_url && (
            <ListItem>
              <Button
                bg="red.100"
                w="100%"
                as="a"
                href={data.extra.youtube_url}
                target="_blank"
                rel="noreferrer"
              >
                <Flex align="center">
                  YouTube
                  <Icon as={BsYoutube} ml={2} />
                </Flex>
              </Button>
            </ListItem>
          )}
          {amazon_music_url && (
            <ListItem>
              <Button
                bg="orange.100"
                w="100%"
                as="a"
                href={amazon_music_url}
                target="_blank"
                rel="noreferrer"
              >
                <Flex align="center">
                  Amazon Music
                  <Icon as={AiOutlineAmazon} ml={2} />
                </Flex>
              </Button>
            </ListItem>
          )}
        </List>
        <List spacing={2}>
          {google_url && (
            <ListItem>
              <Button
                bg="blue.100"
                w="100%"
                as="a"
                href={google_url}
                target="_blank"
                rel="noreferrer"
              >
                <Flex align="center">
                  Google Play
                  <Icon as={FcGoogle} ml={2} />
                </Flex>
              </Button>
            </ListItem>
          )}
          {spotify_url && (
            <ListItem>
              <Button
                bg="green.100"
                w="100%"
                as="a"
                href={spotify_url}
                target="_blank"
                rel="noreferrer"
              >
                <Flex align="center">
                  Spotify
                  <Icon as={BsSpotify} ml={2} />
                </Flex>
              </Button>
            </ListItem>
          )}
        </List>
      </SimpleGrid>
    </Box>
  );
};

export default ExternalLinks;
