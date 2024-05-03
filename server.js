require("dotenv").config();
require("colors");
const express = require("express");
const connectDB = require("./dbinit");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();

const appRoute = require("./routes/appRoutes");

app.use("/api", appRoute);

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Cloudinary & Multer");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`.bgCyan);
});