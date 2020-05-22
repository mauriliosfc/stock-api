const { ProdutosController } = require('../controllers')
/** @param { import('express').Express} app */
module.exports = app => {

    const Produtos = new ProdutosController(app.database.index.models.produtos)

    app.route('/produtos')
        .get((req, res) => {
            Produtos.get(req, res)
        })
        .post((req, res) => {
            Produtos.create(req, res)
        })
        .put((req, res) => {
            Produtos.update(req, res)
        })

    app.route('/produtos/:id')
        .get((req, res) => {
            Produtos.getByPk(req, res)
        })
        .delete((req, res) => {
            Produtos.delete(req, res)
        })
}