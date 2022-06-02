import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Client } from "podcast-api";
import {
  SearchInput,
  Banner,
  LatestReleases,
  RecommendedPodcasts,
} from "../components/Home";

const Home = (props) => {
  console.log(props);
  return (
    <Box
      w="full"
      h="full"
      px="10"
      pt="5"
      pb={20}
      bgGradient="linear(to-br,red.400,red.100)"
      overflow="scroll"
    >
      <Head>
        <title>Home | Codecast</title>
        <meta
          name="description"
          content="Coding podcasts of the week | Codecast"
        />
      </Head>
      <SearchInput />
      <Banner />
      <LatestReleases />
      <RecommendedPodcasts />
    </Box>
  );
};

export async function getServerSideProps() {
  const client = Client({ apiKey: "535fd86327e443ff8fad6e261564e08c" });
  const res = await client.search({
    q: "javascript",
    sort_by_date: 0,
    type: "episode",
    offset: 0,
    len_min: 10,
    len_max: 30,
    published_before: 1580172454000,
    published_after: 0,
    only_in: "title,description",
    language: "English",
    safe_mode: 0,
  });

  return {
    props: {
      data: res.data.results,
    },
  };
}

export default Home;
