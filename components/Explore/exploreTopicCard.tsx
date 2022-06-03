import React from "react";
import { Box, Center, Text, Icon } from "@chakra-ui/react";
import {
  DiReact,
  DiJavascript,
  DiAngularSimple,
  DiGo,
  DiPhp,
  DiAws,
  DiJava,
} from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const TOPIC_INFO = {
  JavaScript: {
    bg: "yellow",
    icon: DiJavascript,
  },
  React: {
    bg: "blue",
    icon: DiReact,
  },
  AWS: {
    bg: "gray",
    icon: DiAws,
  },
  Angular: {
    bg: "red",
    icon: DiAngularSimple,
  },
  Go: {
    bg: "purple",
    icon: DiGo,
  },
  PHP: {
    bg: "pink",
    icon: DiPhp,
  },
  Vue: {
    bg: "green",
    icon: FaVuejs,
  },
  Java: {
    bg: "orange",
    icon: DiJava,
  },
  Cpp: {
    bg: "blue",
    icon: SiCplusplus,
  },
};

const ExploreTopicCard = ({ topic }: { topic: string }) => {
  return (
    <Box
      minH="200px"
      role="group"
      p={6}
      bgGradient={`linear(to-br,${TOPIC_INFO[topic].bg}.400,${TOPIC_INFO[topic].bg}.100)`}
      boxShadow="2xl"
      rounded="lg"
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Text color="white" fontWeight="bold" fontSize="2xl">
        {topic}
      </Text>
      <Center>
        <Icon as={TOPIC_INFO[topic].icon} color="white" fontSize="8xl" />
      </Center>
    </Box>
  );
};

export default ExploreTopicCard;
