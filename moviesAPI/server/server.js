import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
dotenv.config({ path: "../.env" });

console.log("Loaded API_KEY:", process.env.API_KEY);
console.log("Loaded PORT:", process.env.PORT);


const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

app.get("/api/movies", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
