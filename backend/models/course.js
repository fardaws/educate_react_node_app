const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    idTeacher: {
        type: String,
    },
    name: {
        type: String,
        require: true,
        min: 6,
        max: 20
    },
    category: {
        type: String,
        require: true,
        min: 6,
        max: 20
    },
    desc: {
        type: String,
        require: true,
        min: 6,
        max: 20
    },
    price: {
        type: Number,
        require: true
    },
    img: {
        type: String,
        require: true,
    }
});
const course = mongoose.model('Course', courseSchema);
module.exports = course; 