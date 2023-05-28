//module.exports.ActionName=function(req, res)
module.exports.home=function(req, res){
    //return res.end('<h1>Express is up<h1>')
    // return res.render('ejs file name')
    return res.render('home',{
        title:'Home'
    })
}
