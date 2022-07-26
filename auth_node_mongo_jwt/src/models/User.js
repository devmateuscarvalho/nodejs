const mongoose = require('mongoose');
const User = mongoose.model('User',{
    name: String,
    email: String,
    passwordHash: String
});

module.exports = User
