const express=require('express');
const router= express.Router();
const userController=require('../controllers/user_controller');
console.log('hey router is working');

router.get('/profile',userController.profile);
router.use('/profile',require('./post'));
router.get('/sign-up',userController.signup);
router.get('/sign-in',userController.signin); //sign-in we can name it here

router.post('/create',userController.create);
router.post('/create-session',userController.createSession);

module.exports=router;