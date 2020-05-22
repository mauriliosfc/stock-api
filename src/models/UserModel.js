const BaseModel = require("./BaseModel")
module.exports = class UserModel extends BaseModel {

    getByEmail(email, senha) {
        return this.model.findOne({
            where: { email }
        })
            .then(res => res)
            .catch(error => {
                throw error
            })
    }
}