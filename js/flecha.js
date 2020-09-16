// function sumar(a, b) {
//     return a + b;
//}
let sumar = (a, b) => a + b;
console.log(sumar(2, 3));

// function hola() {
//     return 'HOLA MUNDO';
// }
let hola = () => 'HOLA MUNDO';

console.log(hola());



let destructuracion = {
    nomre: 'WALTER',
    apellido: ' CEDEÑO',
    poder: 'PROGRAMADOR',
    getNombre() {
        return `${this.nomre} ${this.apellido} - poder ${this.poder}`
    }
};