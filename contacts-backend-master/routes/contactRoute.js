const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');

router.get('/', contactController.main);
router.get('/readAll', contactController.readAll);
router.post('/addContact', contactController.addContact);
router.post('/editContact', contactController.editContact);
router.delete('/deleteContact/:id', contactController.deleteContact);

module.exports = router;
