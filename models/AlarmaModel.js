'use strict';

// Conectar con driver
// Conecctar con la base de datos

require('../bin/connectMongoose');
var mongoose = require('mongoose');

// Creo el esquema
var alarmaSchema = mongoose.Schema({
    title: String,
    usuario: String,
    posicionInicio: String,
    posicionFinal: String,
    horaAlarma: Date,
    horaAlarmaPosible: Date,
    activa: String,
});

alarmaSchema.statics.list = function(parametros, cb){

/*    // Creamos un objeto para añadir los parametros a la busqueda
    var criteria = {};

    // Añadimos los parametros que nos han mandado
    // Parametro title
    if (parametros.id !== ""){
        criteria = {
            _id: parametros.id
        };
    }
    

    // Preparamos la Query sin ejecutarla (No ponemos callback a find)
    // Hacemos la busqueda con los parametros finales
    var query = Alarma.find(criteria);
    console.log(parametros.skip, parametros.limit);
    // Añadimos mas parámetros a la query
    query.sort(parametros.sort);
    query.skip(parametros.skip*parametros.limit);
    query.limit(parametros.limit);

    // La ejecutamos
    query.exec(function(err, alarmas) {

        // Devolvemos error
        if (err) {
            cb(err);
            return;
        }
        // var numElemMostrados = rows.length;
        // O devolvemos los resultados
        cb(null, alarmas);
    });*/
};

alarmaSchema.statics.item = function(id, cb){
    // Preparamos la Query sin ejecutarla (No ponemos callback a find)
/*    var query = Alarma.find({"id": id});
    // La ejecutamos
    query.exec(function(err, alarma){

        // Devolvemos error
        if (err){
            cb(err);
            return;
        }
        // Devolvemos los resultados
        cb(null, alarma);
    });*/
};

// Lo registro en mongoose
var Alarma = mongoose.model('Alarmas', alarmaSchema);