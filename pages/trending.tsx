import Head from "next/head";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import Artists from "../components/Trending/artists";
import Podcasts from "../components/Trending/podcasts";
import Episodes from "../components/Trending/episodes";

const trending = (props) => {
  return (
    <div>
      <Head>
        <title>Trending | Codecast</title>
        <meta
          name="description"
          content="Trending coding podcasts of the week | Codecast"
        />
      </Head>
      <Box
        w="full"
        h="full"
        px={{ base: 5, md: 10 }}
        pt={{ base: 5, md: 16 }}
        bgGradient="linear(to-br,purple.400,purple.100)"
      >
        <Artists artists={props.data.artists.items} />
        <Podcasts podcasts={props.data.podcasts.items} />
        <Episodes episodes={props.data.episodes.items} />
      </Box>
    </div>
  );
};

export async function getStaticProps() {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: "coding,programming",
      type: "multi",
      offset: "0",
      limit: "10",
      numberOfTopResults: "5",
    },
    headers: {
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      "X-RapidAPI-Key": "99ce66d5dfmsha436ab19abf2a98p159b14jsnf42294d312e6",
    },
  };
  const { data } = await axios.request(options);
  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24,
  };
}

export default trending;
