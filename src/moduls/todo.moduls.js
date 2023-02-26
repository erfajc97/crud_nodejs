const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const ToDo = db.define("todo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN ,
    allowNull: false,
  },
});

module.exports = ToDo;