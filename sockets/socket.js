const { io } = require('../index');
const {comprobarJWT} = require('../helpers/jwt')
const {UsuarioConectado,UsuarioDesconectado, grabarMensaje}= require('../controllers/socketController')

// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    //?? cliente con JWT

    const [valido,uid]=comprobarJWT(client.handshake.headers['x-token'])
//verificar autenticacion
if (!valido) {
    return client.disconnect();
} 


console.log('Cliente autenticado')
UsuarioConectado(uid)

//ingresar al usuario a una sala especifica
//sala global donde estan todas las personas conectas

client.join(uid);


//Escuchar del cliente el mensaje-personal

client.on('mensaje-personal',async (payload)=>{
    console.log(payload);

    //Grabar Mensaje
   await  grabarMensaje(payload)


    io.to(payload.para).emit('mensaje-personal',payload)

    
})





    // const jwtvalido


    client.on('disconnect', () => {
        console.log('Cliente desconectado');
        UsuarioDesconectado(uid)
    });


    
    // client.on('mensaje', ( payload ) => {
    //     console.log('Mensaje', payload);
    //     io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );
    // });


});
