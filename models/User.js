var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    remember_token:String,
    images:String,
    created_at:{type: Date, default:Date.now},
    updated_at:{type: Date, default:Date.now},
});

module.exports = mongoose.model('User',UserSchema);