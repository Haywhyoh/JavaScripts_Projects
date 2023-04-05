const db = require('../utils/db');
const redis = require('../utils/redis');
const bcrypt = require('bcrypt');

export const basicAuth = async (req) => {
        const auth = req.headers.authorization || null;

        if (!auth) {
            return null;

        }
        const authElements = auth.split(' ');

        if (authElements.length !== 2 || authElements[0] !== 'Basic') {
            return null;
        }

        const token = authElements[1].toString();
        const position = token.indexOf(':');
        const username = token.substring(0, position);
        const password = token.substring(position + 1);
        const user = await db.getUser(username);
        console.log(user)
        
        if (!user || bcrypt.compareSync(password, user.password)) {
            return null;
        }

        return user;
    }

export const tokenAuth = async (req) => {
    const token = request.header['x-token'];

    if (!token) {
        return null;
    }

    const userId = await redis.get(`auth_${token}`);

    if (!userId) {
        return null;
    }

    const user = await (await db.userCollection()).find({ _id: new mongoDBCore.BSON.ObjectId(userId) });
    return user || null;
}

module.exports = {
    basicAuth: async (req) => basicAuth(req),
    tokenAuth: async (req) => tokenAuth(req),
  };
  

