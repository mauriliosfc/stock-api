var jwt = require('jsonwebtoken');

module.exports = app => {
    app.validaToken = (req, res, next) => {
        let token = req.headers.authorization

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err)
                return res.status(500).send({
                    auth: false,
                    message: 'Falha na autenticação por token.'
                });
            req.userId = decoded.id;
            next();
        });
    }
}