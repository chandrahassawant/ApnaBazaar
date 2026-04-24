const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const userRoutes =require("../src/routes/user.routes")

app.use("/api", userRoutes);

module.exports = app;