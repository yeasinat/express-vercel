import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Express backend on vercel!" });
});

export default app;
