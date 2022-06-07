import React from "react";
import {
  Box,
  Text,
  List,
  ListItem,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { PodcastInfo } from "../../types/podcast";

const PodcastDetails = ({ data }: { data: PodcastInfo }) => {
  const { total_episodes, email, publisher, looking_for } = data;
  return (
    <Box>
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        fontWeight="500"
        textTransform="uppercase"
        mb="4"
      >
        Podcast Details
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <List spacing={2}>
          <ListItem>
            <Text as="span" fontWeight="bold">
              Number of episodes:
            </Text>{" "}
            {total_episodes}
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">
              Email:
            </Text>{" "}
            {email}
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">
              Publisher:
            </Text>{" "}
            {publisher}
          </ListItem>
        </List>
        <List spacing={2}>
          <ListItem>
            <Text as="span" fontWeight="bold">
              Looking for cohosts:
            </Text>{" "}
            {looking_for.cohosts ? "Yes" : "No"}
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">
              Looking for guests:
            </Text>{" "}
            {looking_for.guests ? "Yes" : "No"}
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">
              Looking for sponsors:
            </Text>{" "}
            {looking_for.sponsors ? "Yes" : "No"}
          </ListItem>
        </List>
      </SimpleGrid>
    </Box>
  );
};

export default PodcastDetails;
