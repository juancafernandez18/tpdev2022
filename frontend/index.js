'use strict';

require('dotenv').config();

var logger = require('morgan');
const express = require('express');
const port = process.env.PORT || 80;
const path = require('path');

var users = require('./src/routes/users')



const app = express();

app.use(logger('dev'))
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '/src/views'));

app.use(express.static(path.join(__dirname, '/src/public')));

app.use('/', users);

app.use('/test', function(req, res, next) {
    console.log('hola');
});


app.listen(port, function() {
    console.log('Servidor corriendo en el puerto ' + port);
});