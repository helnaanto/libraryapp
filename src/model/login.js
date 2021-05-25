//Accessing Mongoose package
const mongoose = require('mongoose');
//Database connection
mongoose.connect('mongodb://localhost:27017/library');
//Schema definition
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    firstname : String,
    lastname : String,
    username : String,
    phoneno : String,
    password : String
});

var login = mongoose.model('login',LoginSchema);

module.exports = login;