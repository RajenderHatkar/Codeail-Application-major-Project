/*const express=require('express');
//require cookies after installation
const cookieParser = require('cookie-parser');
const app=express();
// by defalut app will run on 80
const port=8001;
//layouts
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');

// used for session cookie
const session =require('express-session');
const passport = require('passport');

const passportLocal = require('./config/passport-local');


//static file like css js and images

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);
// extract style and scripts from sub pages into layouts
//app.set('layout extractstyles',true);
//app.set('layout extractscripts',true);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
//use express router

app.use('/',require('./routes'));

//set up ejs view engine
app.set('view engine','ejs');
app.set('views','./views');



app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());


//use express router

app.use('/',require('./routes'));
app.use(passport.initialize());
app.use(passport.session());



app.listen(port,function(err){
    if(err){
        //console.log('error in running',err);
        //interpolasation
        console.log(`error in running',${err}`);
    }
    console.log(`server is running fine on port:,${port}`);

});*/
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8001;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');
const MongoStore=require('connect-mongo')(session);


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

/*app.use(session({
    name: 'codeial',
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    //storing session cookies with connect-mongo
    store: new MongoStore({
        mongooseConnection:db
    })
}));*/

app.use(session({
    name:'Codeial',
    secret:'dosomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(100*60*100)
    },
    store:new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disable'
    }), // <-- added closing parenthesis
    function (err) {
        console.log(err || 'connect-mongodb setup ok');
    }
}));



app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));
app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running: ${err}`);
    }
    console.log(`Server is running fine on port: ${port}`);
});