const { EmpresaController } = require('../controllers')
/** @param { import('express').Express} app */
module.exports = app => {

    const Empresa = new EmpresaController(app.db.models.empresa)

    app.route('/empresa')
        .get(app.validaToken, (req, res) => {
            Empresa.getByUser(req, res)
        })
        .post(app.validaToken, (req, res) => {
            Empresa.create(req, res)
        })
        .put(app.validaToken, (req, res) => {
            Empresa.update(req, res)
        })

    app.route('/empresa/:id')
        .get(app.validaToken, (req, res) => {
            Empresa.getByPk(req, res)
        })
        .delete(app.validaToken, (req, res) => {
            Empresa.delete(req, res)
        })
}