//module.exports.ActionName=function(req, res)
const Post= require('../models/post');
module.exports.home=function(req, res){
    //return res.end('<h1>Express is up<h1>')
    // return res.render('ejs file name')
//to populate the author or user use populate
    /*Post.find({},function(err,posts){
        if(err){
            console.log('error');
            return;
        }
        return res.render('home',{
            title:'Home',
            posts:posts
        })
        
    });*/
    //populate the user
    Post.find({}).populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,posts){
       
        return res.render('home',{
            title:'Home',
            posts:posts
        });
    })




   /* return res.render('home',{
        title:'Home'
    })*/
}
