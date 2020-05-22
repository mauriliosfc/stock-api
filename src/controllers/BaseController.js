module.exports = class BaseController {
    constructor(model) {
        this.model = model
    }

    get(req, res) {
        this.model.findAll()
            .then(result => {
                res.status(200).send(result)
            })
            .catch(error => {
                res.status(400).send(result)
            })
    }

    getByPk(req, res) {
        this.model.findByPk(req.params.id)
            .then(result => {
                res.status(200).send(result)
            })
            .catch(error => {
                res.status(400).send(error)
            })
    }

    create(req, res) {
        this.model.create(req.body)
            .then(result => {
                res.status(200).send({ message: "Registro criado com successo.", data: result })
            })
            .catch(error => {
                res.status(400).send(error)
            })
    }

    update(req, res) {
        let id = req.body.id
        delete req.body.id
        this.model.update(req.body, {
            where: {
                id: id
            }
        })
            .then(() => {
                res.status(200).send({ message: "Registro atualizado com successo." })
            })
            .catch(error => {
                res.status(400).send(error)
            })
    }

    delete(req, res) {
        this.model.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.status(200).send({ message: "Registro deletado com successo." })
            })
            .catch(error => {
                res.status(400).send(error)
            })
    }
}