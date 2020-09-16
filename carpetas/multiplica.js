const fs = require('fs');
var colors = require('colors');
let resultado = 0;
let data = '';

let listamultiplica = (base, limite = 10) => {
    for (let i = 1; i < limite; i++) {
        console.log(`${base} x ${i} = ${i * base} `.trap);
    }

}
let crearArchivo = async(base, limite) => {
    if (!Number(base)) {
        throw new Error('NO ES UN NUMERO');
    } else {
        for (let i = 1; i < limite; i++) {
            resultado = i * base;
            data += `${base} x ${i} = ${resultado} \n`;
        }
        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tabla${base}.txt`, data, (err) => {
            if (err) {
                throw new Error(err);
            } else {

                return (`ARCHIVOS GUARADOS ${base}`);

            }
        });
    }

    return (`ARCHIVOS GUARADOS ${base}`);
}

module.exports = {
    crearArchivo,
    listamultiplica
}