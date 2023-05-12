const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QueryUserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    query: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("QueryUsers", QueryUserSchema);