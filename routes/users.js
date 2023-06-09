const express=require('express');
const router= express.Router();
const passport = require('passport');
const userController=require('../controllers/user_controller');
console.log('hey router is working');

router.get('/profile',passport.checkAuthentication,userController.profile);
router.use('/profile',require('./post'));
router.get('/sign-up',userController.signup);
router.get('/sign-in',userController.signin); //sign-in we can name it here

router.post('/create',userController.create);
// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
),userController.createSession);

router.get('/sign-out', userController.destroySession);

module.exports=router;