const mongoose = require('mongoose');

const localDB = 'mongodb://localhost:27017/role_auth';
const connectDb = async () => {
  await mongoose.connect(localDB, {
    useUnifiedTopology: true
  });
  console.log('MongoDb Connected');
};

module.exports = connectDb;
