const mongoose = require('mongoose');
var todoModel = mongoose.model('Todo',{
    text : {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Object,
        default: null
    }
});

module.exports = {todoModel}
