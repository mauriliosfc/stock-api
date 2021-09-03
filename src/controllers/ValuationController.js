const BaseController = require("./BaseController");
const bcrypt = require("bcryptjs");

module.exports = class ValuationController extends BaseController {
    async getByEmpresaId(req, res) {
        try {
            let result = await this.model
            .findOne({
              limit: 1,
              where: { empresa_id: req.params.empresaId },
            })
            .then((res) => res)
            .catch((error) => {
              throw error;
            });
            res.status(201).send({ message: "Registro encontrado com successo.", data: result })
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    }
};
