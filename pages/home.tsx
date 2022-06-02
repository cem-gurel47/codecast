import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { SearchInput, Banner, LatestReleases } from "../components/Home";

const Home = () => {
  return (
    <Box
      w="full"
      h="full"
      px="10"
      py="5"
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
    </Box>
  );
};

export default Home;
