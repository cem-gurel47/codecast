import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

  axios
    .request(options)
    .then((response) => {
      res.status(200).send({
        data: response.data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        error,
      });
    });
}
