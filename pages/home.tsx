import { Box } from "@chakra-ui/react";
import Head from "next/head";
import {
  SearchInput,
  Banner,
  LatestReleases,
  RecommendedPodcasts,
} from "../components/Home";
import Podcast from "../types/podcast";

const Home = ({ data }: { data: Podcast[] }) => {
  console.log(data);

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
      <Banner hottestPodcastOfTheWeek={data[0]} />
      <LatestReleases />
      <RecommendedPodcasts />
    </Box>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/home");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Home;
