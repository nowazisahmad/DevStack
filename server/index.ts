import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS — allow Vite dev server
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Better Auth handler — MUST be before express.json()
app.all("/api/auth/*splat", toNodeHandler(auth));

// Body parser — after auth handler
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`✅ Auth server running on http://localhost:${PORT}`);
});
