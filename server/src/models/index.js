const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize");
const config = require("../config/config.js");
const db = {};
const sequelize = new Sequelize(
  config.db.DBNAME,
  config.db.USER, 
  config.db.PASSWORD, {
  host: config.db.HOST,
  dialect: config.db.dialect,
/*
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }*/
});

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file != "index.js" 
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
     db[model.name] = model
  })

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// mozes obrisati ovodb.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;