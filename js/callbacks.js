// setTimeout(()=> {

// },3000)
let gatUsuariopId = (id, callback) => {
    let usuario = {
        nombre: 'gernando',
        id
    }
    callback(usuario);
}

gatUsuariopId(10, (usuario) => {
    console.log('usuario d3e la basa', usuario);
});