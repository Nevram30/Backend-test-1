"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import process from "process";
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

interface DB {
  sequelize: Sequelize.Sequelize;
  Sequelize: typeof Sequelize;
}

const db: DB = {
  sequelize: new Sequelize.Sequelize(
    config.database,
    config.username,
    config.password,
    config.options
  ),
  Sequelize: Sequelize,
};

let sequelize: Sequelize.Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize.Sequelize(
    process.env[config.use_env_variable] as string,
    config
  );
} else {
  sequelize = new Sequelize.Sequelize(
    process.env[config.use_env_variable] as string,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
