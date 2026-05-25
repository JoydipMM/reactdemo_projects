import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";


dotenv.config();

const app = express();
const port = process.env.DB_PORT || 3001;

app.use(cors());
app.use(express.json());


// testing postgres connection
app.get("/", async (req, res) => {
    const result = await pool.query("SELECT current_database();");
    res.send(`The database name is ${result.rows[0].current_database}`);
})

app.listen(process.env.PORT, () => console.log(`Server running on port ${port}`));