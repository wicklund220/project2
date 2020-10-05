const express = require('express');
const router = express.Router();  //express router - new router object - can use as part of middleware to redirect the request
const ctrl = require('../controllers');

router.get('/', ctrl.equipment.index);
// router.get('/new', ctrl.equipment.newFruit);
// router.get('/:index', ctrl.equipment.show);
// router.get('/:index/edit', ctrl.equipment.edit);
// router.post('/', ctrl.equipment.addFruit);
// router.delete('/:index', ctrl.equipment.deleteFruit);
// router.put('/:index', ctrl.equipment.updateFruit);

module.exports = router;