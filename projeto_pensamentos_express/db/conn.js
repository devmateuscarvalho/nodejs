const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pensamentosdb', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate();
    console.log('Autenticado com sucesso');
} catch(err){
    console.log(`Não foi possivel conectar: ${err}`)
}

module.exports = sequelize