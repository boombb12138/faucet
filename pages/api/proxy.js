import axios from "axios";

export default async function handler(req, res) {
  const { path } = req.query;

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_FAUCET_BACKEND_API}/${path}`
    );

    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
}
