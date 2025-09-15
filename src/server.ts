import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blog system API running...");
});

const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("DB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
