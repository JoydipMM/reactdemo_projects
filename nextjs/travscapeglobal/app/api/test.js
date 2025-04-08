import { connectDB } from "../../lib/config/db"; // adjust path as needed

export default async function handler(req, res) {
  await connectDB();

  res.status(200).json({ message: "DB connected (check console logs)" });
}