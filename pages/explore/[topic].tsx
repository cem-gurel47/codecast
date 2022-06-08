import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import Artists from "../../components/Trending/artists";
import Podcasts from "../../components/Trending/podcasts";
import Episodes from "../../components/Trending/episodes";

const TOPIC_COLORS = {
  javascript: {
    bg: "yellow",
    title: "JavaScript",
  },
  react: {
    bg: "blue",
    title: "React",
  },
  aws: {
    bg: "gray",
    title: "AWS",
  },
  angular: {
    bg: "red",
    title: "Angular",
  },
  go: {
    bg: "purple",
    title: "Go",
  },
  php: {
    bg: "pink",
    title: "PHP",
  },
  vue: {
    bg: "green",
    title: "Vue",
  },
  java: {
    bg: "orange",
    title: "Java",
  },
  "c++": {
    bg: "blue",
    title: "C++",
  },
};

const Topic = (props) => {
  const { data } = props;
  const { artists, podcasts, episodes } = data;
  const router = useRouter();
  const { topic } = router.query;
  const topicColor = TOPIC_COLORS[topic as string].bg;
  const topicTitle = TOPIC_COLORS[topic as string].title;

  return (
    <Box
      p={10}
      bgGradient={`linear(to-br,${topicColor}.400,${topicColor}.100)`}
    >
      <Head>
        <title>{`${topicTitle} | Codecast`}</title>
        <meta
          name="description"
          content={`Best ${topicTitle} podcasts | Codecast`}
        />
      </Head>
      <Artists artists={artists.items} />
      <Podcasts podcasts={podcasts.items} />
      <Episodes episodes={episodes.items} />
    </Box>
  );
};

export async function getServerSideProps(context) {
  const { topic } = context.query;
  const { data: result } = await axios.get("explore", {
    params: {
      topic,
    },
  });
  return {
    props: result,
  };
}

export default Topic;
