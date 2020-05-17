const UserController = require('../controllers/UserController')
/** @param { import('express').Express} app */
module.exports = app => {
    const User = new UserController(app.database.index.models.user)
    app.route('/user')
        .get((req, res) => {
            User.get(req, res)
        })
}