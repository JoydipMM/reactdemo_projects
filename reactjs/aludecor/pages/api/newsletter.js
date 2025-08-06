export default function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid Email Address" });
      return;
    }
    console.log(userEmail);
    fetch(
      `${process.env.NEXT_PUBLIC_NEWSLETTER_URL}wpcf7/newsletter/feedback`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_address: userEmail })
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("main", data);
        const responseMsg = data.message;
        res.status(data.data.status).json({ message: responseMsg });
      });

    // res.status(201).json({ message: "Success" });
  }
}
