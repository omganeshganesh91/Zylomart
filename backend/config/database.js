const mongoose = require('mongoose');

const connectDatabase = () => {
    // Add mongoose.set to handle the deprecation warning
    mongoose.set('strictQuery', true);  // or false depending on your preference

    // Connect to MongoDB using the URI from the environment variable
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(con => {
        console.log(`MongoDB is connected to the host: ${con.connection.host}`);
    })
    .catch(err => {
        console.error(`MongoDB connection error: ${err.message}`);
    });
};

module.exports = connectDatabase;
