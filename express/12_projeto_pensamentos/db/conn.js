const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pensamentosdb', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})