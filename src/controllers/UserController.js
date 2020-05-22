const BaseController = require('./BaseController')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

module.exports = class UserController extends BaseController {
    async create(req, res) {
        try {
            req.body.senha = bcrypt.hashSync(req.body.senha, salt)
            let result = await this.model.create(req.body)
            res.status(201).send({ message: "Registro criado com successo.", data: result })
        } catch (error) {
            res.status(400).send(error)
        }
    }
}