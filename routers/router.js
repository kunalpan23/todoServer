const dbController = require('../dbUtils/dbController');
const router = require('express').Router();

/* Fet All todo's from the DB */
router.get('/getAllTodo', dbController.getAllTodo);

/* Add a new Todo */
router.post('/addTodo', dbController.addTodo);

/* Update todo by ID */
router.post('/updateTodo', dbController.updateTodo);

module.exports = router;
