const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize')
const config = require('../config/db')
var db = null

module.exports = app => {
    if (!db) {
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            {
                host: config.host,
                dialect: config.dialect,
                define: config.define,
                dialectOptions: {
                    ssl: true
                }
            }
        );
        sequelize.authenticate()
            .then(res => {
                console.log('db conectado')
            })
            .catch(error => {
                console.log('db desconectado')
            })
        db = {
            sequelize,
            Sequelize,
            models: {}
        }
        const dir = path.join(__dirname, "..", "models");
        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });
        Object.keys(db.models).forEach(key => {
            if ("associate" in db.models[key])
                db.models[key].associate(db.models);
        });
    }

    return db
}