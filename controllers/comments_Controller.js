const  Comments=require('../models/comments')
const Post=require('../models/post');
const mongoose=require('mongoose');

module.exports.create=function(req,res){
    // post we using becaue in ejs file named it as post in input type hidden
    Post.findById(req.body.post,function(err,post){
        if(post){
            Comments.create({
                content:req.body.content,
                post:req.body.post,
                user:req.user._id
            }, function(err,comment){
                if(err){
                    console.log('error in creating comment');
                    return;
                }

                post.comments.push(comment);
                post.save();
                res.redirect('/');
                
            });
        }

    });
}