import { NextApiRequest, NextApiResponse } from "next";

const handleFetch = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;

  try {
    const fetchRes = await fetch(query?.fetchUrl as string);
    const data = await fetchRes.json();

    return res.status(200).json(data);
  } catch (e: any) {
    return res.status(422).json({ message: e.message });
  }
};

export default handleFetch;
