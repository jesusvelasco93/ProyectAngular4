var express = require('express');
var path = require('path');
var logger = require('morgan');


// Creación de la aplicación
var app = express();
// Registro consola de peticiones
app.use(logger('dev'));


// Servir contenido de la carpeta publica
app.use(express.static(path.join(__dirname, 'public')));


// Ficheros de Rutas
var index = require('./routes/index');

// Rutas de Contenido
app.use('/', index);


// error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  //var mensage = err.message;

  // render the error page
  res.status(err.status || 500);
  res.sendFile(path.join(__dirname+'/public/error.html'));
});


module.exports = app;