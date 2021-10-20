const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/databaseone",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( ( ) => {console.log("connection is sucsseccful ") })
.catch((error) =>{
    console.log(error);
});