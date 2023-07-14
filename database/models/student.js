const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    id:{
        type: String,
        trim: true,
    },
    Name: {
        type: String,
        trim: true,
    },
    Age: {
        type: String,
        trim: true,
    },
    Birthday: {
        type: String,
        trim: true,
    },
    University: {
        type: String,
        trim: true,
    },
    Fees: {
        type: String,
        trim: true,
    }
});

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student;