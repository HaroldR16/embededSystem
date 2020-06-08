const express = require('express');
const route = express.Router();

const SerialPort = require('serialport');
const port = new SerialPort('COM4', {
    baudRate: 115200
}, (err)=>{
    if(err) return console.error(`Error: ${err.message}.`)
})

route.get('/', (req, res)=>{
    res.render('index');
});
route.post('/turnOn', (req, res)=>{
    port.write('1', (err)=>{
        if(err){
            console.log(`Error ${err}.`)
        }
    });
    res.redirect('/')
});
route.post('/turnOff', (req, res)=>{
    port.write('0', (err)=>{
        if(err){
            console.log(`Error: ${err}.`)
        }
    });
    res.redirect('/')
});

port.on('error', (err)=>{
    if(err) console.error(`Error: ${err.message}`)
});

module.exports = route;