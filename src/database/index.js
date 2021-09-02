const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../../config/config").development;
var db = null;

module.exports = (app) => {
  if (!db) {
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      {
        host: config.host_conect,
        dialect: config.dialect,
        define: config.define,
        pool: {
          max: 20,
          min: 0,
          evict: 10000,
          idle: 10000,
        },
        timezone: "-03:00",
      }
    );
    sequelize
      .authenticate()
      .then((res) => {
        console.log("db conectado");
      })
      .catch((error) => {
        console.log("db desconectado");
      });
    db = {
      sequelize,
      Sequelize,
      models: {},
    };
    const dir = path.join(__dirname, "..", "models", "define");
    fs.readdirSync(dir).forEach((file) => {
      const modelDir = path.join(dir, file);
      const model = sequelize.import(modelDir);
      db.models[model.name] = model;
    });
    Object.keys(db.models).forEach((key) => {
      if ("associate" in db.models[key]) db.models[key].associate(db.models);
    });
  }

  app.db = db;
};
