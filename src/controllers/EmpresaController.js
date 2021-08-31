const BaseController = require('./BaseController')
const bcrypt = require('bcryptjs')

module.exports = class EmpresaController extends BaseController {
    getByUser(req, res) {
        this.model.findAll({ where: { user_id: req.userId } })
            .then(result => {
                res.status(200).send(result)
            })
            .catch(error => {
                res.status(400).send(error)
            })
    }
    create(req, res) {
        req.body.user_id = req.userId;
        this.model.create(req.body)
            .then(result => {
                res.status(201).send({ message: "Registro criado com successo.", data: result })
            })
            .catch(error => {
                res.status(400).send(error)
            })
    }
}