let empleados = [{
        id: 1,
        nombre: 'fernando'
    },
    {
        id: 2,
        nombre: 'walter'
    },
    {
        id: 3,
        nombre: 'suanny'
    }
];

let salario = [{
    id: 1,
    salarios: 2000
}, {
    id: 4,
    salarios: 3000
}];


let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {

        let empleadodb = empleados.find(empleados => empleados.id === id);
        if (!empleadodb) {
            reject(`No Existe un Empleado con el ID ${id}`);
        } else {
            resolve(empleadodb);
        }

    });

}
let getSalario = (empleados) => {
    return new Promise((resolve, reject) => {
        let salariodb = salario.find(salario => salario.id === empleados.id);
        if (!salariodb) {
            reject(`No SE ECONTRO UN SALARIO ${empleados.nombre}`);
        } else {
            resolve({
                nombre: empleados.nombre,
                salarios: salariodb.salarios
            });
        }
    });
}

getEmpleado(1).then(empleados => {
    return getSalario(empleados);
}).then(resp => {
    console.log(`El salario de  ${resp.nombre} es ${resp.salarios}`);
}).catch(
    (err) => {
        console.log(err);
    }
)


// console.log('Empleado del mes', empleados);
// getSalario(empleados).then(resp => {
//         console.log(`El salario de  ${resp.nombre} es ${resp.salarios}`);
//     },
//     (err) => {
//         console.log(err);
//     });

// }, (err) => {
// console.log(err);