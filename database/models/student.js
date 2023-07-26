const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
    },
    Email: {
        type: String,
        trim: true,
    },
    First_Name: {
        type: String,
        trim: true,
    },
    Middle_Name: {
        type: String,
        trim: true,
    },
    Last_Name: {
        type: String,
        trim: true,
    },
    School_Name: {
        type: String,
        trim: true,
    },
    Standard: {
        type: String,
        trim: true,
    },
    Date_of_Birth: {
        type: String,
        trim: true,
    },
    Country_of_Citizenship: {
        type: String,
        trim: true,
    },
    Fathers_Name: {
        type: String,
        trim: true,
    },
    Fathers_Occupation: {
        type: String,
        trim: true,
    },
    Fathers_Company_Name: {
        type: String,
        trim: true,
    },
    Fathers_Phone_Number: {
        type: String,
        trim: true,
    },
    Fathers_Email_Address: {
        type: String,
        trim: true,
    },
    Mothers_Name: {
        type: String,
        trim: true,
    },
    Mothers_Occupation: {
        type: String,
        trim: true,
    },
    Mothers_Email_Address: {
        type: String,
        trim: true,
    },
    Mothers_Phone_Number: {
        type: String,
        trim: true,
    },
    current_photo: {
        type: String,
        trim: true,
    },
    email_address: {
        type: String,
        trim: true,
    },
    mobile_number: {
        type: String,
        trim: true,
    },
    academic_interests: {
        type: String,
        trim: true,
    },
    countries_interested_in_applying_to: {
        type: String,
        trim: true,
    },
    dream_colleges: {
        type: String,
        trim: true,
    },
    Budget_Constraints: {
        type: String,
        trim: true,
    },
    registered_for_SATCT: {
        type: String,
        trim: true,
    },
    SATCT_Date: {
        type: String,
        trim: true,
    },
    registered_for_the_Aps: {
        type: String,
        trim: true,
    },
    Aps_Date: {
        type: String,
        trim: true,
    },
    registered_for_the_TOEFLELTS: {
        type: String,
        trim: true,
    },
    TOEFLELTS_Date: {
        type: String,
        trim: true,
    },
    already_taken_SATCT: {
        type: String,
        trim: true,
    },
    SATCT_Score: {
        type: String,
        trim: true,
    },
    already_taken_APs: {
        type: String,
        trim: true,
    },
    Aps_Score: {
        type: String,
        trim: true,
    },
    already_taken_your_TOEFLELTS: {
        type: String,
        trim: true,
    },
    TOEFLELTS_Score: {
        type: String,
        trim: true,
    },
    school_reports: {
        type: String,
        trim: true,
    },
    extracurricular_activity_1: {
        type: String,
        trim: true,
    },
    Number_of_years_EC1: {
        type: String,
        trim: true,
    },
    Awards_won_EC1: {
        type: String,
        trim: true,
    },
    extracurricular_activity_2: {
        type: String,
        trim: true,
    },
    Number_of_years_EC2: {
        type: String,
        trim: true,
    },
    Awards_won_EC2: {
        type: String,
        trim: true,
    },
    extracurricular_activity_3: {
        type: String,
        trim: true,
    },
    Number_of_years_EC3: {
        type: String,
        trim: true,
    },
    Awards_won_EC3: {
        type: String,
        trim: true,
    },
    extracurricular_activity_4: {
        type: String,
        trim: true,
    },
    Number_of_years_EC4: {
        type: String,
        trim: true,
    },
    Awards_won_EC4: {
        type: String,
        trim: true,
    },
    extracurricular_activity_5: {
        type: String,
        trim: true,
    },
    Number_of_years_EC5: {
        type: String,
        trim: true,
    },
    Awards_won_EC5: {
        type: String,
        trim: true,
    },

});

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student;