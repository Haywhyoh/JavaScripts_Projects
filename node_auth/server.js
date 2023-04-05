const express = require('express');
const connectDb = require('./db');

const app = express();
const PORT = 5000;

//connected database
connectDb();

const server = app.listen(console.log(`App is running at port ${PORT}`))

process.on("unhandledRejection", err => {
  console.log(`There is a error: ${err.message}`);
  server.close(() => process.exit(1));
})