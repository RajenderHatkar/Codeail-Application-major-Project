const User=require('../models/user');
const mongoose=require('mongoose');
module.exports.profile=function(req, res){
    //return res.end('<h1>it a user profile section<h1>')
    return res.render('profile',{
        title:'profile'
    })
}
//module.exports.ActionName=function(req, res)
//render sign in and up
module.exports.signup=function(req,res){
    return res.render('user_sign_up',{
        title:'codeial | sign up'
    })

}
module.exports.signin=function(req,res){
    return res.render('user_sign_in',{
        title:'codeial | sign in'
    })

}
// get sign up
module.exports.create= function(req,res){
    if(req.body.password!=req.body.conform_password){
        return res.redirect('back')
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in the signing up');
            return
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user');
                    return
                }
                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('back');
        }

    })

};
//get sign in
module.exports.createSession= function(req,res){

}