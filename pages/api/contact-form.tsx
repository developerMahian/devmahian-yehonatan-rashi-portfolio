import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  const endpoint = process.env.DISCORD_CONTACT_WEBHOOK ?? "";

  const JSONdata = JSON.stringify(body);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSONdata,
  };

  try {
    const response = await axios(endpoint, options);
    res.status(200).json({ body: response.data });
  } catch (error) {
    console.log(error);

    res.status((error as AxiosError).response?.status ?? 500).json(error);
  }
}
