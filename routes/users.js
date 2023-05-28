const express=require('express');
const router= express.Router();
const userController=require('../controllers/user_controller');
console.log('hey router is working');

router.get('/profile',userController.profile);

module.exports=router;