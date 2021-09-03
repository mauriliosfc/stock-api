const { ValuationController } = require('../controllers')
/** @param { import('express').Express} app */
module.exports = app => {

    const Valuation = new ValuationController(app.db.models.valuation)

    app.route('/valuation')
        .post(app.validaToken, (req, res) => {
            Valuation.create(req, res)
        })
        .put(app.validaToken, (req, res) => {
            Valuation.update(req, res)
        })

    app.route('/valuation/:empresaId')
        .get(app.validaToken, (req, res) => {
            Valuation.getByEmpresaId(req, res)
        })
        
}