const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true,
        max: 50,
        min: 5
    },
    idTeacher: {
        type: String
    },
    date: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
    },
    img: {
        type: String
    }
});
const event = mongoose.model('Event', eventSchema);
module.exports = event; 