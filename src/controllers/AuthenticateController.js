const bcrypt = require('bcryptjs')
const { UserModel } = require('../models')
var jwt = require('jsonwebtoken');

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
                    let token = jwt.sign(
                        {
                            id: user.id,
                            nome: user.nome
                        },
                        process.env.SECRET,
                        {
                            expiresIn: 3000 // expires in 50min
                        }
                    );
                    res.status(200).send({ auth: true, token })
                } else {
                    res.status(401).json({ message: "Senha incorreta" });
                }
            })
        } catch (error) {
            res.status(401).json(error);
        }
    }
}