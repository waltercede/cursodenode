const { crearArchivo, listamultiplica } = require('./carpetas/multiplica.js');
const argv = require('yargs')
    .command('listar', 'Imprimir en consola la tabla multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            demand: true,
            alias: 'l',
            default: 10
        }
    })
    .argv;
// let base = 2;
// let nombre = 'walter';
//let argv2 = process.argv;
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listamultiplica(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(
            archiVo => console.log(archiVo)
        ).catch(
            console.log('NO ES UN NUMERO')
        );
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