const express=require('express');
const router= express.Router();
const userController=require('../controllers/user_controller');
console.log('hey router is working');

router.get('/profile',userController.profile);
router.use('/profile',require('./post'));

module.exports=router;