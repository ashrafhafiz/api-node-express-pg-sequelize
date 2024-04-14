"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);

// Get the config for the working environment
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
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

db.users.associate = (models) => {
  db.users.hasMany(models.posts, {
    as: "posts",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

db.posts.associate = (models) => {
  db.posts.belongsTo(models.users, {
    as: "user",
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
  });
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// console.log(db);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
