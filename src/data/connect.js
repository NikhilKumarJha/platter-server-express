const mongoose=require('mongoose');

// register the models
require('../models/Restaurant');

const {
    DB_HOST,
    DB_PORT,
    DB_NAME
}=process.env;

const connectionStr=`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

mongoose.connect(connectionStr)
    .then(()=>{
        console.log(`connected to the ${DB_NAME}`); 
        require('./seed');
    })
    .catch(err=>{
        console.log(err.message);
        process.exit(1);
    })