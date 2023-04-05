const { tokenAuth, basicAuth } = require('../utils/auth');

export const doBasicAuth = async (req, res, next) => {
    const user = await basicAuth(req, res);

    if (!user) {
        return res.status(404).json({user : "Not Found"})
    }

    req.user = user;
    next()
}

export const doTokenAuth = async (req, res, next) => {
    const user = await tokenAuth(req, res);

    if (!user) {
        if (!user) {
            return res.status(404).json({user : "Not Found"})
        }
    }

    req.user = user;
    next()
}