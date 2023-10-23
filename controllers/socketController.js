const Usuario=require('../models/usuario')
const Mensaje=require('../models/mensaje')



//metodos de interaccion con los sockets

const UsuarioConectado=async (uid='')=>{

    const usuario  = await Usuario.findById(uid)
    usuario.online = true
    await usuario.save()
    return usuario

}

const UsuarioDesconectado=async (uid='')=>{

    const usuario  = await Usuario.findById(uid)
    usuario.online = false
    await usuario.save()
    return usuario

}

const grabarMensaje= async(payload)=>{


    try {
        const mensaje= new Mensaje(payload  );
        await mensaje.save();


        return true
    } catch (error) {
        return false
    }
}

module.exports={
    UsuarioConectado,
    UsuarioDesconectado,
    grabarMensaje
}




