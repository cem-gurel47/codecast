import { Box } from "@chakra-ui/react";
import Head from "next/head";
import axios from "./api/axios";
import {
  Banner,
  LatestReleases,
  RecommendedPodcasts,
} from "../components/Home";
import Podcast, { BestPodcast } from "../types/podcast";

const Home = ({
  data,
}: {
  data: {
    data: Podcast[];
    bestPodcasts: BestPodcast[];
  };
}) => {
  return (
    <Box
      w="full"
      h="full"
      px={{ base: 5, md: 10 }}
      pt={{ base: 5, md: 16 }}
      pb={20}
      bgGradient="linear(to-br,red.400,red.100)"
    >
      <Head>
        <title>Home | Codecast</title>
        <meta
          name="description"
          content="Coding podcasts of the week | Codecast"
        />
      </Head>
      {/* <SearchInput /> */}
      <Banner hottestPodcastOfTheWeek={data.data[0]} />
      <LatestReleases latestReleases={data.data.slice(1, 7)} />
      <RecommendedPodcasts
        recommendedPodcasts={data.bestPodcasts.slice(0, 5)}
      />
    </Box>
  );
};

export async function getServerSideProps() {
  const { data: items } = await axios.get("home");
  return {
    props: {
      data: items,
    },
  };
}

export default Home;
