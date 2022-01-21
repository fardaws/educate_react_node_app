const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        max: 15,
        min: 5,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        max: 50
    },
    password: {
        type: String,
        min: 10,
        max: 30,
        require: true
    },
    role: {
        type: String,
        enum: ["student", "teacher"]
    },
    profilePicture: {
        type: String,
        default: ""
    },
    myLearnings: {
        type: Array
    },
    Messages: {
        type: Array
    },
    desc: {
        type: String,
        max: 100
    },
    headline: {
        type: String,
        default: ""
    },
    langue: {
        type: Array,
        default: []
    },
    cv: {
        type: String
    },
    myCours: {
        type: Array
    },
    myEvents: {
        type: Array
    }
});
const user = mongoose.model('User', userSchema);
module.exports = user; 