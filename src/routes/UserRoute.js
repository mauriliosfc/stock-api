/** @param { import('express').Express} app */
module.exports = app => {
    const User = app.database.index.models.user
    app.route('/user')
        .get((req, res) => {
            User.findAll()
                .then(result => {
                    res.send(result)
                })

        })
}