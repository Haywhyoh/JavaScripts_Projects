const uuid = require('uuid')
const redis = require('../utils/redis')
class AuthController {
    static async getConnect(req, res) {
        const {user} = req
        const token = uuid.v4();

        await redis.set(`auth_${token}`, user._id.toString(), 24 * 60 * 60);
        return res.status(200).json({token});

    }

    static async getDisconnect(req, res) {
        const token = req.headers['x-token'];
    
        await redisClient.del(`auth_${token}`);
        res.status(204).send();
    }
}

module.exports = AuthController