const express = require('express');
const connectDb = require('./db');
const cookieParser = require('cookie-parser');
const { userAuth, adminAuth } = require('./middleware/auth');
const router = require('./auth/routes');
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cookieParser());

//  connected database
connectDb();

app.use('/api/auth', router);

app.get('/admin', adminAuth, (req, res) => res.send('Admin Login'));
app.get('/user', userAuth, (req, res) => res.send('User Login'));

const server = app.listen(PORT, console.log(`App is running at port ${PORT}`));

process.on('unhandledRejection', err => {
  console.log(`There is a error: ${err.message}`);
  server.close(() => process.exit(1));
});
