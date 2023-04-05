const dbClient = require("../utils/db");
const redisClient = require("../utils/redis");

class appController{
    static getStatus(req, res) {
        res.status(200).json(
            {
                "db" : dbClient.isAlive(),
                "redis": redisClient.isAlive(),
            }
        )
    };

    static getStats(req, res) {
        res.status(200).json(
            {
                'users' : dbClient.nbUsers(),
            }
        );
    };
}

module.exports = appController