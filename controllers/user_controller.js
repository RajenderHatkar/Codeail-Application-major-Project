module.exports.profile=function(req, res){
    //return res.end('<h1>it a user profile section<h1>')
    return res.render('post',{
        title:'profile'
    })
}
//module.exports.ActionName=function(req, res)