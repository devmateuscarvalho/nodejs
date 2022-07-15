const express = require('express');
const router = express.Router();
const PensamentoController = require('../controllers/PensamentoController')
//Controller
router.get('/', PensamentoController.showPensamento)

module.exports = router