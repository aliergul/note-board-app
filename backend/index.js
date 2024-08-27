require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);

const express = require("express");
const cors = require("cors");
const app = express();

// Routes
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ data: "hello world" });
});

app.use(authRoutes);
app.use(noteRoutes);

app.listen(8000);

module.exports = app;
