// dependecies - use npm install --save express body-parser mongoose to install these

const mongoose = require('mongoose');
const app = require('express')(); 

const apiRoutes = require("./Routes/routes");

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