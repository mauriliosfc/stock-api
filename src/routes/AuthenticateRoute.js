const { AuthenticateController } = require('../controllers')

/** @param { import('express').Express} app */
module.exports = app => {

    const Authenticate = new AuthenticateController(app.db.models.user)

    app.route('/authenticate')
        .post(async (req, res) => {
            await Authenticate.login(req, res)
        })
}