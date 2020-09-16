let getNombre = async() => {
    //throw new Error('ha Ocurriodo un error');
    let nombre = 'hola mundo'
    return nombre;
}

getNombre().then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
});

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

let getEmpleado = async(id) => {
    let empleadodb = empleados.find(empleados => empleados.id === id);
    if (!empleadodb) {
        throw new Error(`No Existe un Empleado con el ID ${id}`);
    } else {
        return (empleadodb);
    }
}
let getSalario = async(empleados) => {
    let salariodb = salario.find(salario => salario.id === empleados.id);
    if (!salariodb) {
        throw new Error(`No SE ECONTRO UN SALARIO ${empleados.nombre}`);
    } else {
        return ({
            nombre: empleados.nombre,
            salarios: salariodb.salarios
        });
    }
}

let getInfromacion = async(id) => {
    let empeadfo = await getEmpleado(id);
    let resp = await getSalario(empeadfo);
    return `${resp.nombre} tiene un salario de \$${resp.salarios}`;
}
getInfromacion(1).then(mensaje => console.log(mensaje)).catch((err) => {
    console.log(err);
});