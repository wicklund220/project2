const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.users.index);
router.get('/signup', ctrl.users.signUp);
router.post('/signup', ctrl.users.infoToPage);
router.get('/profile/:index', ctrl.users.profile);
router.get('/login' , ctrl.users.renderlogin);
router.post('/login', ctrl.users.login);
router.put('/profile/:index', ctrl.users.edit);
router.delete('/profile/:index', ctrl.users.deleteUser);


module.exports = router;