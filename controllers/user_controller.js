const User=require('../models/user');
const mongoose=require('mongoose');
module.exports.profile=function(req, res){
    //return res.end('<h1>it a user profile section<h1>')
    //checking whether user id is prsent in cookies
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err,user){
            if(user){
                return res.render('profile',{
                    title:'profile',
                    user:user
                })

            }
            return res.redirect('/users/sign-in')
            
        });

    }
    else{
        return res.redirect('/users/sign-in')
    }



   /* return res.render('profile',{
        title:'profile'
    })*/
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
//get sign in and create a user session
module.exports.createSession= function(req,res){
    //find the user
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in the signing in');
            return;
        }
        //user found
        if(user){
            //handle password mismatch
            if(user.password != req.body.password){
                return res.redirect('back');
            }
            //handle session creation
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
        }
        else{
            //handle user not found
            return res.redirect('back');
            //return res.redirect('/users/sign-up');
        }

    })

}