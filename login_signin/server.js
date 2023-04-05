const express = require('express');
const  injectRoutes = require('./routes/index.js');
const app = express();

app.use(express.json());

injectRoutes(app);

app.listen(5000, () => {
    console.log(`App is running on port 5000`);
  })
module.export = app;