const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Codeial_development_App');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error to connect the db'));

db.once('open',function(){
    console.log('Successfully connected to the DataBase!!!');
});
/*const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// connect to database

mongoose.connect('mongodb://127.0.0.1:27017/Codeial_development_App', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Can't connect to MongoDb"));

// if connection is successful
db.once('open', () => {
    console.log("Data Base will Connected")
});*/

module.exports=db;
