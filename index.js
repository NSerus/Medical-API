// dependecies - use npm install --save express body-parser mongoose swagger-ui-express swagger-jsdoc dotenv   to install these
//edit on package.json the swagger-jsdoc version to "6.1.0" and run npm i -s swagger-jsdoc

let bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = require('express')(); 

require("dotenv/config");

const apiRoutes = require("./Routes/routes");

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerDoc = require('./public/api/swagger.json');
app.use('/med',swaggerUI.serve, swaggerUI.setup(swaggerDoc));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', apiRoutes);

//Connect to DB


const mongoDB = process.env.DB_CONNECTION_STRING;
app.listen( 8080, ()=>
{
  
    console.log('Server UP')
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology:true}).then(console.log('MONGODB: Connected')).catch(err=>console.log(err));
});
