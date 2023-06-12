const mongoose = require('mongoose');
const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //incluse the arry of ids of all comments here in post schema
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comments'
        }
    ]


},{
    timestamps:true
});
const Post =mongoose.model('Post',postSchema);
module.exports = Post;