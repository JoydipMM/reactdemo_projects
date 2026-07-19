require("dotenv").config();
const express = require("express");
const app = express();
const configureCors = require("./config/corsConfig");
const { requestLogger, timeStamp } = require("./middleware/customMiddleware");
const { asyncHandler } = require("./middleware/errorHandler");
const customRateLimitMiddleware = require("./middleware/ratelimitMiddleware");
const rateLimitRoute = require("./routes/demo-list-route");

const port = process.env.PORT || 4000;

app.use(customRateLimitMiddleware(4, 1 * 60 * 1000)); // in 15 minutes, 100 requests accepted only


app.use(requestLogger); // customize request logger middleware
app.use(timeStamp); // customize timestamp middleware

app.use(express.json());
app.use(configureCors()); // customize cors middleware

app.use("/api", rateLimitRoute);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});