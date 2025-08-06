export default async function handler(req, res) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_IMAGE_URL}auth/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`
        },
        body: JSON.stringify(req.body)
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
}
