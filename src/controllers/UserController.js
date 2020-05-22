const BaseController = require('./BaseController')
const bcrypt = require('bcryptjs')

module.exports = class UserController extends BaseController {
    async create(req, res) {
        try {
            let salt = await bcrypt.genSalt(10);
            req.body.senha = await bcrypt.hash(req.body.senha, salt);

            let result = await this.model.create(req.body)
            res.status(201).send({ message: "Registro criado com successo.", data: result })
        } catch (error) {
            res.status(400).send(error)
        }
    }
}