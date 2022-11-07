import { useRouter } from "next/router";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import Artists from "../../components/Trending/artists";
import Podcasts from "../../components/Trending/podcasts";
import Episodes from "../../components/Trending/episodes";
import { TOPICS } from "./index";

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
      w="full"
      h="full"
      px={{ base: 5, md: 10 }}
      pt={{ base: 5, md: 16 }}
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

export async function getStaticProps(context) {
  const { topic } = context.params;

  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: topic,
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

export async function getStaticPaths() {
  const paths = TOPICS.map((topic) => ({
    params: {
      topic: topic.toLocaleLowerCase("en-US"),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Topic;
