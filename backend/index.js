'use strict';

require('dotenv').config();

var logger = require('morgan');
const express = require('express');
const port = process.env.PORT || 4000;
const path = require('path');

var users = require('./src/routes/users')



const app = express();

app.use(logger('dev'))



//AGREGAMOS LAS DOS LINEAS SIGUIENTES



app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '/src/views'));
app.use(express.static(path.join(__dirname, '/src/public')));


app.use('/users', users);


app.listen(port, function() {
    console.log('Servidor corriendo en el puerto ' + port);
});