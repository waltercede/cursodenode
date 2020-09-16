const fs = require('fs');

let listado = [];
let nombrearchivo = 'db/data.json';
let listados = [];
const guardarDB = () => {
    let data = JSON.stringify(listado); //// convierte el objeto a un json valido
    fs.writeFile(nombrearchivo, data, (err) => {
        if (err) {
            throw new Error('NO SE PUEDE GRABAR');
        } else {
            return (`ARCHIVOS GUARADOS`);
        }
    });
}

const listartareas = () => {
    cargarDB();
    return listado;
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listado.push(porHacer);
    guardarDB();
    return porHacer;
}
const cargarDB = () => {
    try {
        listado = require('../db/data.json');

    } catch (error) {
        listado = [];
    }

}

const actualizardb = (descripcion, completado = true) => {
    cargarDB();
    let index = listado.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listado[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false;
}

const borrardb = (descripcion) => {
    cargarDB();
    let nuevoListado = listado.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listado.length === nuevoListado.length) {
        return false;
    } else {
        listado = nuevoListado;
        guardarDB();
        return true;
    }
}
module.exports = {
    crear,
    listartareas,
    actualizardb,
    borrardb

}