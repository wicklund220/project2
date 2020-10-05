const express = require('express');
const router = express.Router();  //express router - new router object - can use as part of middleware to redirect the request
const ctrl = require('../controllers');

// router.get('/', ctrl.attachment.index);
// router.get('/new', ctrl.attachment.newFruit);
// router.get('/:index', ctrl.attachment.show);
// router.get('/:index/edit', ctrl.attachment.edit);
// router.post('/', ctrl.attachment.addFruit);
// router.delete('/:index', ctrl.attachment.deleteFruit);
// router.put('/:index', ctrl.attachment.updateFruit);

module.exports = router;