import React from "react";
import { Box, Text, Icon, Center } from "@chakra-ui/react";
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
  "C++": {
    bg: "blue",
    icon: SiCplusplus,
  },
};

const ExploreTopicCard = ({ topic }: { topic: string }) => {
  return (
    <Box
      height="200px"
      role="group"
      p={6}
      boxShadow="2xl"
      bgGradient={`linear(to-br,${TOPIC_INFO[topic].bg}.500,${TOPIC_INFO[topic].bg}.100)`}
      rounded="lg"
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
      }}
      overflow="hidden"
    >
      <Text color="white" fontWeight="bold" fontSize="2xl">
        {topic}
      </Text>
      <Center
        transform="rotate(-60deg)"
        mr="-130px"
        p={2}
        // bg="whiteAlpha.100"
        bgGradient="linear(to-br,whiteAlpha.500,whiteAlpha.100)"
      >
        <Icon
          transform="rotate(60deg)"
          as={TOPIC_INFO[topic].icon}
          color={`${TOPIC_INFO[topic].bg}.500`}
          fontSize="8xl"
        />
      </Center>
    </Box>
  );
};

export default ExploreTopicCard;
