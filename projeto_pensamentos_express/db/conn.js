const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pensamentosdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate();
    console.log('Conectado com o banco PENSAMENTOSDB');
} catch (err) {
    console.log(`Não foi possivel conectar: ${err}`)
}

module.exports = sequelize;