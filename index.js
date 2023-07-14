const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
const Student = require('./database/models/student');
const cors = require('cors');

app.use(express.json());
app.use(express.static('public'));

app.use(cors({
    origin: '*'
}));

//Student APIs
{
    //Get All item
    app.get('/student', (req, res) => {
        Student.find({})
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Add an item
    app.post('/student', (req, res) => {
        (new Student({
            'id': req.body.id,
            'Name': req.body.Name,
            'Age': req.body.Age,
            'Birthday': req.body.Birthday,
            'University': req.body.University,
            'Fees': req.body.Fees,
        }))
            .save()
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Get 1 item
    app.get('/student/:Name', (req, res) => {
        Student.find({ Name: req.params.Name })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Updating Student
    app.patch('/student/:Name', (req, res) => {
        Student.findOneAndUpdate({ 'Name': req.params.Name }, { $set: req.body })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //delete item
    app.delete('/student/:Name', (req, res) => {
        Student.findOneAndDelete({ 'Name': req.params.Name })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    })
}

app.listen(process.env.port || 3000, function () {
    console.log('now listening for requests');
});

