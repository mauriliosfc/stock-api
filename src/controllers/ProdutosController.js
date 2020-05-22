const BaseController = require('./BaseController')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

module.exports = class ProdutosController extends BaseController { }