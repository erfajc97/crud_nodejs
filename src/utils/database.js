const {Sequelize} = require("sequelize");

const db = new Sequelize({
  database: "crud_todo",
  port: 5432,
  host: "localhost",
  username: "erfajc",
  password: "root",
  dialect: "postgres",
});

module.exports = db;