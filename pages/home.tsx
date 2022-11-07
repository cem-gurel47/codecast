import { Box } from "@chakra-ui/react";
import Head from "next/head";
import {
  Banner,
  LatestReleases,
  RecommendedPodcasts,
} from "../components/Home";
import Podcast, { BestPodcast } from "../types/podcast";
import client from "./api/client";

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

export async function getStaticProps() {
  const result = await client.search({
    q: "javascript",
    sort_by_date: 0,
    type: "episode",
    offset: 0,
    published_before: 1580172454000,
    published_after: 0,
    only_in: "title,description",
    language: "English",
    safe_mode: 0,
  });

  const bestPodcasts = await client.fetchBestPodcasts({
    genre_id: 143,
    sort: "listen_score",
  });
  return {
    props: {
      data: {
        data: result.data.results,
        bestPodcasts: bestPodcasts.data.podcasts,
      },
    },
    // should regenerate the page every 24 hours
    revalidate: 60 * 60 * 24,
  };
}

export default Home;
