require('dotenv').config();
const PORT = process.env.PORT || 3500;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/updateme', require('./routes/api/update'));
connectDB();

app.use('/sendquery', require('./routes/api/query'));

mongoose.connection.once("open", () => {
    app.listen(PORT, () => console.log(`server running on ${PORT}`));
    console.log("DataBase connected");
})

