const Post=require('../models/post');
const Comments=require('../models/comments')
const mongoose=require('mongoose');
module.exports.create=function(req,res){
    Post.create({
        content:req.body.content,
        user:req.user._id
    },
    function(err,post){
        if(err){
            console.log('error in creating post');
            return;
        }
        return res.redirect('back');

    });
}

module.exports.destroy=function(req,res){
    //find the post
    Post.findById(req.params.id,function(err,post){
        //.id menas converting object id into string
        if(post.user==req.user.id){
            post.remove();
            Comments.deleteMany({post:req.params.id},function(err){
                return res.redirect('back');

            })
        }
        else{
            return res.redirect('back');
        }
    })

}