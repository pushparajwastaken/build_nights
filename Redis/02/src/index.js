import express, { request, response } from "express";
import Redis from "ioredis";
const app = express();
app.use(express.json());
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");
const BANNER_KEY = "app:banner";

app.post("/banner", async (request, response) => {
  await redis.set(
    BANNER_KEY,
    request.body.message || "Weclome to chai aur redis",
  );
  response.json({ sucess: true });
});
app.get("/banner", async (request, response) => {
  const message = await redis.get(BANNER_KEY);
  response.json({ message });
});
app.delete("/banner", async (request, response) => {
  await redis.del(BANNER_KEY);
  response.json({ success: true });
});

app.get("/banner/exits", async (request, response) => {
  const exists = await redis.exits(BANNER_KEY);
  response.json({ exists: Boolean(exists) });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
