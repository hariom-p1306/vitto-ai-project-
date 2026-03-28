import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectMongo from "./config/mongo.js";
import authRoutes from "./routes/authRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());

// DB Connections
connectMongo();
console.log("ENV CHECK:", process.env.PG_URI);

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});