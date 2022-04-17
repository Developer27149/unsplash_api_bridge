// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { decrypt } from "../../utils/index";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { keyword, access_id } = req.body;
  if (!keyword || !access_id) {
    res.status(404);
  } else {
    const url = `https://api.unsplash.com/photos/random?client_id=${decrypt(
      access_id
    )}&query=${keyword}`;
    const resp = await fetch(url);
    const data = await resp.json();
    res.status(200).json(data);
  }
}
