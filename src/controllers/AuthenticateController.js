const bcrypt = require('bcryptjs')
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
            bcrypt.compare(senha, user.senha, (err, resHash) => {
                if (resHash === true) {
                    res.status(200).send({ token: "dev" })
                } else {
                    res.status(401).json({ message: "Senha incorreta" });
                }
            })
        } catch (error) {
            res.status(401).json(error);
        }
    }
}

