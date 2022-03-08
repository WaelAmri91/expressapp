var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = new Schema({
    Login : String,
    Password : String
});

module.exports = mongoose.model('user', user);