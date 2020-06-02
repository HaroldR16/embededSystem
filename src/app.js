//Import

const express = require('express');
const SerialPort = require('serialport');
const readline = require('@serialport/parser-readline');
const routes = require('./routes/index');
//Config

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs')
app.set('views', `${process.cwd}/views`);

//Port

const port = new SerialPort('COM3', {
    baudRate: 115200
}, (err)=>{
    if(err) return console.error(`Error: ${err.message}.`)
})

port.on('error', (err)=>{
    if(err) console.error(`Error: ${err.message}`)
});

//routes
app.use('/', routes);

app.listen(app.get('port'), ()=>{
    console.log(`Connected to port: ${app.get('port')}`)
});