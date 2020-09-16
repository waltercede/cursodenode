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


let getEmpleado = (id, callback) => {
    let empleadodb = empleados.find(empleados => empleados.id === id);
    if (!empleadodb) {
        callback(`No Existe un Empleado con el ID ${id}`);
    } else {
        callback(null, empleadodb);
    }

}

let getSalario = (idempleado, callback) => {
    let salariodb = salario.find(salario => salario.id === idempleado.id);
    if (!salariodb) {
        callback(`No SE ECONTRO UN SALARIO ${idempleado.nombre}`);
    } else {
        callback(null, {
            nombre: idempleado.nombre,
            salario: salariodb.salarios
        });
    }

}

getEmpleado(3, (err, empleados) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleados, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${resp.nombre} es ${resp.salario}`);
    })
});