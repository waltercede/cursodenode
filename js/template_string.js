let nombre = 'walter';
let real = 'wade winston';

console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);



let destructuracion = {
    nomre: 'WALTER',
    apellido: ' CEDEÑO',
    poder: 'PROGRAMADOR',
    getNombre: function () {
        return `${this.nomre} ${this.apellido} - poder ${this.poder}`

    }
};

let nombreactor = destructuracion.nomre;

let { nomre: primerNombre, apellido, poder } = destructuracion; //deadpool se le agrego un identificador a la variable nombre
console.log(primerNombre, apellido, poder);