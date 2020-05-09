/** @param { import('express').Express} app */
module.exports = app => {
    app.get('/', (_, res) => {
        res.send('Você chamou a rota raiz!')
    })
}