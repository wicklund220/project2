const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.users.index);
router.get('/signup', ctrl.users.renderSignUp);
router.post('/signup', ctrl.users.newUser);
router.get('/profile/:index', ctrl.users.profile);
router.get('/login' , ctrl.users.renderLogIn);
router.post('/login', ctrl.users.userLogIn);
// router.put('/profile/:index', ctrl.users.edit);
router.delete('/profile/:index', ctrl.users.deleteProfile);


module.exports = router;