const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");

const authRoute = require("../routes/authRoute");

require("dotenv").config();


const connectDB = require("../config/db");



connectDB();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors());

//common auth

app.use("/api/auth", authRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})