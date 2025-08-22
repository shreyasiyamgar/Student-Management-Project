const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const fetch = require('node-fetch');
const dotenv = require('dotenv');

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();



app.use("/api/auth", require("./routes/auth"));
app.use("/api/homework", require("./routes/homeworkroutes")); 
app.use("/api/attendance",require("./routes/attendenceRoutes"));
app.use('/api/payment',require("./routes/payment"));
app.use('/api/doubtSolution',require("./routes/doubtSolution"));
app.use('/api/complaint', require("./routes/complaint"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
