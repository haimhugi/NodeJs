const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    ID: { type: String, required: true },
    Phone: { type: String, required: true },
    IP: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);