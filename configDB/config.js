require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
function connectDB(){
    try{
        mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PWD}@cluster0.thryfln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;