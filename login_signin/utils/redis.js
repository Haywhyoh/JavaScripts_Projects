const redis = require('redis');
import { promisify } from 'util';

class RedisClient {
    constructor() {
        this.client = redis.createClient();
        this.isConnected = false;
        this.client.on('error', (err) => {
            console.error("Redis client failed to connect:", err.message);
            this.isConnected = false;
        });
        this.client.on('çonnect', () =>{
            this.isConnected = true;
        })
    }

    isAlive() {
        return this.isConnected;
    }

    async get(key) {
        return promisify(this.client.GET).bind(this.client)(key);
    }

    async set(key, value, duration) {
        await promisify(this.client.SETEX).bind(this.client)(key, duration, value);
    }

    async del(key) {
        await promisify(this.client.DEL).bind(this.client)(key);
    }
}

export const redisClient = new RedisClient();
export default redisClient; 