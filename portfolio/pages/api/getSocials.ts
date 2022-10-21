// Nextjs API route support https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

import { SanityClient } from "next-sanity";
import { groq } from "next-sanity";

const query = groq`
*[_type == "social"]
`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
