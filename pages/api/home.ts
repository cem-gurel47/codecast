/* eslint-disable no-buffer-constructor */
import type { NextApiRequest, NextApiResponse } from "next";
import client from "./client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
  res.status(200).send({
    data: result.data.results,
    bestPodcasts: bestPodcasts.data.podcasts,
  });
}
