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
            'Email': req.body.Email,
            'First_Name': req.body.First_Name,
            'Middle_Name': req.body.Middle_Name,
            'Last_Name': req.body.Last_Name,
            'School_Name': req.body.School_Name, 
            'Standard': req.body.Standard, 
            'Date_of_Birth': req.body.Date_of_Birth, 
            'Country_of_Citizenship': req.body.Country_of_Citizenship, 
            'Fathers_Name': req.body.Fathers_Name, 
            'Fathers_Occupation': req.body.Fathers_Occupation, 
            'Fathers_Company_Name': req.body.Fathers_Company_Name, 
            'Fathers_Phone_Number': req.body.Fathers_Phone_Number, 
            'Fathers_Email_Address': req.body.Fathers_Email_Address, 
            'Mothers_Name': req.body.Mothers_Name, 
            'Mothers_Occupation': req.body.Mothers_Occupation, 
            'Mothers_Email_Address': req.body.Mothers_Email_Address, 
            'Mothers_Phone_Number': req.body.Mothers_Phone_Number, 
            'current_photo': req.body.current_photo, 
            'email_address': req.body.email_address, 
            'mobile_number': req.body.mobile_number, 
            'academic_interests': req.body.academic_interests, 
            'countries_interested_in_applying_to': req.body.countries_interested_in_applying_to, 
            'dream_colleges': req.body.dream_colleges, 
            'Budget_Constraints': req.body.Budget_Constraints, 
            'registered_for_SATCT': req.body.registered_for_SATCT, 
            'SATCT_Date': req.body.SATCT_Date, 
            'registered_for_the_Aps': req.body.registered_for_the_Aps, 
            'Aps_Date': req.body.Aps_Date, 
            'registered_for_the_TOEFLELTS': req.body.registered_for_the_TOEFLELTS, 
            'TOEFLELTS_Date': req.body.TOEFLELTS_Date, 
            'already_taken_SATCT': req.body.already_taken_SATCT, 
            'SATCT_Score': req.body.SATCT_Score, 
            'already_taken_APs': req.body.already_taken_APs, 
            'Aps_Score': req.body.Aps_Score, 
            'already_taken_your_TOEFLELTS': req.body.already_taken_your_TOEFLELTS, 
            'TOEFLELTS_Score': req.body.TOEFLELTS_Score, 
            'school_reports': req.body.school_reports, 
            'extracurricular_activity_1': req.body.extracurricular_activity_1, 
            'Number_of_years_EC1': req.body.Number_of_years_EC1, 
            'Awards_won_EC1': req.body.Awards_won_EC1, 
            'extracurricular_activity_2': req.body.extracurricular_activity_2, 
            'Number_of_years_EC2': req.body.Number_of_years_EC2, 
            'Awards_won_EC2': req.body.Awards_won_EC2, 
            'extracurricular_activity_3': req.body.extracurricular_activity_3, 
            'Number_of_years_EC3': req.body.Number_of_years_EC3, 
            'Awards_won_EC3': req.body.Awards_won_EC3, 
            'extracurricular_activity_4': req.body.extracurricular_activity_4, 
            'Number_of_years_EC4': req.body.Number_of_years_EC4, 
            'Awards_won_EC4': req.body.Awards_won_EC4, 
            'extracurricular_activity_5': req.body.extracurricular_activity_5,
            'Number_of_years_EC5': req.body.Number_of_years_EC5, 
            'Awards_won_EC5': req.body.Awards_won_EC5,
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

