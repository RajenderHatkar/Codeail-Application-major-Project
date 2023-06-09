const express=require('express');
const router= express.Router();
const homeController=require('../controllers/home_controller');
console.log('hey router is working');

router.get('/',homeController.home);
//router.use('/',require('./users'));
router.use('/users',require('./users'));
//for any other routers access from here
//router.use('/routername',require('./routerfile'));
router.use('/users',require('./post'));

router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));
module.exports=router;