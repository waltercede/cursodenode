const { crearArchivo, listamultiplica } = require('./carpetas/multiplica.js');
const argv = require('./carpetas/yargs.js').argv;
const porhacer = require('./porhacer/porhacer.js');
var colors = require('colors');

//const argv = require('yargs').argv;
// .command('listar', 'Imprimir en consola la tabla multiplicar', {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         demand: true,
//         alias: 'l',
//         default: 10
//     }
// })
// .argv;
// let base = 2;
// let nombre = 'walter';
//let argv2 = process.argv;
let comando = argv._[0];
switch (comando) {
    case 'listar':
        let listados = porhacer.listartareas();

        for (let tarea of listados) {
            console.log("+++++++POR HACER+++++++++".green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log("++++++++++++++++++++++++++".green);
        }

        break;
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);

        console.log(tarea);
        // crearArchivo(argv.base, argv.limite).then(
        //     archiVo => console.log(archiVo)
        // ).catch(
        //     console.log('NO ES UN NUMERO')
        // );
        break;
    case 'actualizar':
        let actualizado = porhacer.actualizardb(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = porhacer.borrardb(argv.descripcion)
        console.log(borrar);
        break;
    default:
        console.log('no reconocido');
        break;
}
//console.log(argv2);
//console.log(argv);

// crearArchivo(base).then(
//     archiVo => console.log(archiVo)
// ).catch(
//     console.log('NO ES UN NUMERO')
// );