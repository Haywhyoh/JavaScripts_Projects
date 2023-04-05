const mongodb = require('mongodb');

class DBClient {
    constructor() {
        const uri = "mongodb+srv://adefeyisayo998:Mydreams@cluster0.nujcd7c.mongodb.net/?retryWrites=true&w=majority";
        this.client = new mongodb.MongoClient(uri,  { useUnifiedTopology: true });
        this.client.connect();
    }

    isAlive() {
        return this.client.isConnected();
    }

    async nbUsers() {
        return this.client.db('userdb').collection('users').countDocuments({});
    }

 
    async userCollection() {
        return this.client.db('userdb').collection('users');
    }

    async getUser(username) {
        return this.client.db('userdb').collection('users').find({username});

    }
}

const dbClient = new DBClient();
module.exports = dbClient;