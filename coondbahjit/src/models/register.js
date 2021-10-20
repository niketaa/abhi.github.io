const mongoose = require('mongoose');
const userSchemaRegister = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    mail:{
        type: String,
        required : true
    },
    textarea:{
        type: String,
        required: true
    }   
});

const Register = new mongoose.model('Register', userSchemaRegister);
module.exports = Register;














// this is realy work I can find new way that way i'm try comments


// const userSchema = new  mongoose.Schema({
//     name:{
//         type: String,
//         required: true
//     },
//     mail:{
//         type: String,
//         required : true
//     },
//     textarea:{
//         type: String,
//         required: true
//     } 

// });

// const Register = new mongoose.model('Register', userSchema);
// module.exports = Register;