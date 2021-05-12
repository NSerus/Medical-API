// dependecies - use npm install --save express body-parser mongoose swagger-ui-express swagger-jsdoc   to install these
//edit on package.json the swagger-jsdoc version to "6.1.0" and run npm i -s swagger-jsdoc

let bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = require('express')(); 

const apiRoutes = require("./Routes/routes");

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerDoc = require('./public/api/swagger.json');
app.use('/med',swaggerUI.serve, swaggerUI.setup(swaggerDoc));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', apiRoutes);

//Connect to DB
const dbPath = 'mongodb://localhost/MedicalApp';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options).then(console.log('Connected')).catch(e=>console.log(e));

//The port to associate to the server, in this case 8000
var port = process.env.PORT || 8000;
app.listen(port, ()=>{console.log("Server UP at \nhttp://localhost:8000/");});