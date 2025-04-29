const mongoose = require('mongoose');

mongoose.set('strictQuery', true); // ✅ Fix Mongoose 7 deprecation warning

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDatabase;

// const mongoose = require('mongoose');

// const connectDatabase = ()=>{
//     mongoose.connect(process.env.DB_LOCAL_URI,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true
//     }).then(con=>{
//         console.log(`MongoDB is connected to the host: ${con.connection.host} `)
//     })
// }

// module.exports = connectDatabase;
