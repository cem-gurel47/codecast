import React from "react";
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
      <Box p={10} pb={0} bgGradient="linear(to-br,purple.400,purple.100)">
        <Artists artists={props.data.artists.items} />
        <Podcasts podcasts={props.data.podcasts.items} />
        <Episodes episodes={props.data.episodes.items} />
      </Box>
    </div>
  );
};

export async function getServerSideProps() {
  const { data: result } = await axios.get("trending");
  return {
    props: {
      data: result.data,
    },
  };
}

export default trending;
