require('dotenv').config()
const express = require('express')
const consign = require('consign')
const app = express()

consign({
    cwd: 'src',
    verbose: process.env.APP_DEBUG === 'true' || false,
    locale: 'pt-br'
})
    .include('./middlewares/globals')
    .then('./database')
    .then('./routes')
    .into(app)

app.listen(process.env.PORT || 3000, () => {
    console.log('=> Servidor rodando!')
})