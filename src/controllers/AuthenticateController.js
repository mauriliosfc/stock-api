const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const { UserModel } = require('../models')

module.exports = class AuthenticateController {
    constructor(model) {
        this.userModel = new UserModel(model)
    }

    async login(req, res) {
        try {
            let { email, senha } = req.body;
            let user = await this.userModel.getByEmail(email)
            if (!user)
                throw new Error("Usuário invalido.")
            if (bcrypt.hashSync(senha, salt) !== user.senha)
                throw new Error("Senha invalida.")
            res.status(200).send({ token: "dev" })
        } catch (error) {
            res.status(401).send(error)
        }
    }
}

