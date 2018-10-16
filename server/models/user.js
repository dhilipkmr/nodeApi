const mongoose = require('mongoose');
var userModel = mongoose.model('Users',{
    name : {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

module.exports = {userModel};
