import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get data submitted in request's body.
  const body = req.body;

  const endpoint = process.env.DISCORD_CONTACT_WEBHOOK ?? "";
  // Get data from the form.

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(body);

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: "POST",
    // Tell the server we're sending JSON.
    headers: {
      "Content-Type": "application/json",
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  };

  // Send the form data to our forms API on Vercel and get a response.
  const response = await fetch(endpoint, options);

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: response.body });
}
