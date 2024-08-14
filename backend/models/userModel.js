const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_num: {
        type: Number,
        // required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    role:{
        type : String,
        enum : ["principal", "teacher", "student"],
        default: "student"
    },
});

module.exports = mongoose.model("User", UserSchema);