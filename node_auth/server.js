const express = require('express');
const connectDb = require('./db');
const register = require('./auth/routes')
const app = express();
const PORT = 5000;
app.use(express.json());

//connected database
connectDb();

app.use("/api/auth", register)

const server = app.listen(PORT, console.log(`App is running at port ${PORT}`))

process.on("unhandledRejection", err => {
  console.log(`There is a error: ${err.message}`);
  server.close(() => process.exit(1));
})