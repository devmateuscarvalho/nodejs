const Pensamento = require('../models/Pensamento');
const User = require('../models/User');
module.exports = class PensamentosController {
    static async showPensamento(req, res){
        res.render('./pensamentos/home')
    }
}