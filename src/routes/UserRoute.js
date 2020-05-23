const { UserController } = require('../controllers')
/** @param { import('express').Express} app */
module.exports = app => {

    const User = new UserController(app.database.index.models.user)

    app.route('/user')
        .get(app.validaToken, (req, res) => {
            User.get(req, res)
        })
        .post((req, res) => {
            User.create(req, res)
        })
        .put((req, res) => {
            User.update(req, res)
        })

    app.route('/user/:id')
        .get((req, res) => {
            User.getByPk(req, res)
        })
        .delete((req, res) => {
            User.delete(req, res)
        })
}