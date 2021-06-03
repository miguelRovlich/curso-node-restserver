const Role = require('../models/role');
const Usuario = require('../models/usuario');

const validaRol = async(rol='')=>{
    const existeRol = await Role.findOne({rol})
    if (!existeRol){
        throw new Error(`el rol ${rol} no esta registrado en la base de datos`)
    }
}

const existeEmail = async(correo='')=>{ 
const existeEmail = await Usuario.findOne({correo});
if (existeEmail) {
    throw new Error(`El correo ${correo} si se encuentra en la base de datos`)
    }
}


const existeUsuarioPorId = async(id)=>{ 
    const existeUsuario = await Usuario.findById(id);
    if (!existeEmail) {
        throw new Error(`El ID ${id} no existe`)
        }
    }
    


module.exports = {
    validaRol,
    existeEmail,
    existeUsuarioPorId
}