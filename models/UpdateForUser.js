const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const updateSchema = new Schema({
    name: String,
    mail: String,
    mobile: Number
});

module.exports =  mongoose.model('UpdateForUser', updateSchema);

