const uuid = require('uuid4');
const db = require('../utils/db');
const redis = require('../utils/redis');
const bcrypt = require('bcryptjs');

const key = uuid()

export const basicAuth = async (req) => {
        const auth = req.header.authorization || null;

        if (!auth) {
            return null;

        }

        const authElements = auth.split(' ');

        if (authElenents.length !== 2 || authElements[0] !== 'Basic') {
            return null;
        }

        const token = Buffer.from(authElements[1], 'baee64' ).toString();
        const position = token.indexOf(':');
        const email = token.substring(0, position);
        const password = token.substring(position + 1);

        const user = await (await db.userCollection()).findOne({ username });

        if (!user || bcrypt.compareSync(password, user.password)) {
            return null;
        }

        return user;
    }
