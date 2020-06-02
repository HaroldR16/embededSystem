const express = require('express');
const route = express.Router();

route.get('/', (req, res)=>{
    res.json(['Hello', 'World'])
});
route.get('/turnOn', (req, res)=>{
    port.write('1');
    res.json(['Turned On'])
});
route.get('/turnOff', (req, res)=>{
    port.write('0');
    res.json(['Turned Off'])
});

module.exports = route;