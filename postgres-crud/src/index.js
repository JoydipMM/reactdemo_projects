import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import userRouter from "./routes/userRouter.js";
import errorHandling from "./middlewares/errorHandling.js";
import createUserTable from "./data/createUserTable.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());

// router
app.use("/api", userRouter);

// create table before starting the server
createUserTable();

// error handing middleware
app.use(errorHandling);


// testing postgres connection
app.get("/", async (req, res) => {
    const result = await pool.query("SELECT current_database();");
    res.send(`The database name is ${result.rows[0].current_database}`);
})

app.listen(port, () => console.log(`Server running on port ${port}`));