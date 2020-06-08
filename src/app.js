//Import

const express = require('express');
//const readline = require('@serialport/parser-readline');
const routes = require('./routes/index');
const path = require('path');

//Config

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', routes);

app.listen(app.get('port'), ()=>{
    console.log(`Connected to port: ${app.get('port')}`)
});