import Head from "next/head";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ExploreTopicCard from "../../components/Explore/exploreTopicCard";

export const TOPICS = [
  "JavaScript",
  "React",
  "AWS",
  "Angular",
  "Go",
  "PHP",
  "Vue",
  "Java",
  "C++",
];

const Explore = () => {
  return (
    <Box
      w="full"
      h="full"
      px={{ base: 5, md: 10 }}
      pt={{ base: 5, md: 10 }}
      pb={40}
      bgGradient="linear(to-br,green.400,red.100)"
      overflow="scroll"
      mb={20}
    >
      <Head>
        <title>Explore | Codecast</title>
        <meta
          name="description"
          content="Explore coding podcasts by topic | Codecast"
        />
      </Head>
      <SimpleGrid minChildWidth="300px" spacing={10} mt={8}>
        {TOPICS.map((topic) => (
          <ExploreTopicCard key={topic} topic={topic} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Explore;
