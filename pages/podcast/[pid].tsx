import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import ExternalLinks from "../../components/PodcastPage/externalLinks";
import PodcastDetails from "../../components/PodcastPage/podcastDetails";
import Episodes from "../../components/PodcastPage/episodes";
import { PodcastInfo } from "../../types/podcast";
import client from "../api/client";

const PodcastPage = ({ data }: { data: PodcastInfo }) => {
  return (
    <Box
      w="full"
      h="full"
      px={{ base: 5, md: 10 }}
      pt={{ base: 5, md: 10 }}
      pb={20}
      bgGradient="linear(to-br,blue.600,blue.100)"
      overflow="scroll"
    >
      <Head>
        <title>{`${data.title} | Codecast`}</title>
        <meta name="description" content={`${data.title} | Codecast`} />
      </Head>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        pb={{ base: 5, md: 10 }}
      >
        <Flex>
          <Image
            rounded="xl"
            alt="product image"
            src={data.thumbnail}
            fit="cover"
            align="center"
            w="100%"
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as="header">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color="primary"
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data.title}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction="column"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize="lg" color="primary">
                {data.description}
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Episodes episodes={data.episodes} podcast={data.title} />
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        borderTop="2px solid orange"
        bg="#FAFBFE"
        mx={{ base: -5, md: -10 }}
        p={{ base: 5, md: 10 }}
        mb={-20}
        pb={40}
      >
        <ExternalLinks data={data} />
        <PodcastDetails data={data} />
      </SimpleGrid>
    </Box>
  );
};

export async function getStaticProps(context) {
  const { pid } = context.params;
  const { data } = await client.fetchPodcastById({
    id: pid,
  });
  // const { data } = await axios.get("/podcast", {
  //   params: {
  //     pid,
  //   },
  // });
  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticPaths() {
  const { data } = await client.fetchBestPodcasts({
    genre_id: 143,
    sort: "listen_score",
  });

  const paths = data.podcasts.map((podcast) => ({
    params: { pid: podcast.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default PodcastPage;
