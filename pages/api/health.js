async function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ message: "!OK" });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

export default handler;
