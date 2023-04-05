const appController = require('../controllers/AppController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { doBasicAuth, doTokenAuth } = require('../middleware/auth')
const injectRoutes = (api) => {
    api.get('/status', appController.getStatus);
    api.get('/stats', appController.getStats);

    api.post('/users', userController.postNew);

    api.get('/connect', doBasicAuth, authController.getConnect);
    api.get('/disconnect', authController.getDisconnect);

}

module.exports = injectRoutes;