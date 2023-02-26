const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

//set up middle ware
app.use(express.json());
const cors = require("cors");

app.use(cors());
