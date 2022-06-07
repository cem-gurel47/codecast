import type { NextApiRequest, NextApiResponse } from "next";
import client from "./client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await client.fetchPodcastById({
    id: req.query.pid,
  });

  res.status(200).send(result.data);
}
