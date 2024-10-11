const mongoose = require('mongoose');

const connectDb = async() => {
    try {
        await mongoose.connect("mongodb+srv://basit17ali:UiAg9RUITQMnOFES@seriescluster.7fcxk.mongodb.net/comp3123_assignment1");
            console.log("MongoDB Connected...");
    }catch(error){
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDb
