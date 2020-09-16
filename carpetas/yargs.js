const opciones2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: ' crear las tareas'
    },
}
const opciones3 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: ' Actualizar las tareas'
    },
    completado: {
        demand: true,
        alias: 'c',
        desc: ' Marcar como completado las tareas'
    },
}

const argv = require('yargs')
    // .command('listar', 'listar las tareas', opciones)
    .command('crear', 'Crear las tareas', opciones2)
    .command('actualizar', 'actualizar las tareas', opciones3)
    .command('borrar', 'borrar las tareas', opciones2)
    .help()
    .argv;



module.exports = {
    argv
}