const express=require('express');
const app=express();
// by defalut app will run on 80
const port=8001;
//use express router

app.use('/',require('./routes'));





app.listen(port,function(err){
    if(err){
        //console.log('error in running',err);
        //interpolasation
        console.log(`error in running',${err}`);
    }
    console.log(`server is running fine on port:,${port}`);

});