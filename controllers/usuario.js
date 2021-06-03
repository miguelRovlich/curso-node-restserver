//funciona igual que el controlador de laravel, el response es el parametro recibido en el resource
const Usuario = require('../models/usuario')
const {response} = require('express')
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')
const usuario = require('../models/usuario')
const usuario = require('../models/usuario')


const usuariosGet = async(req = request,res = response) => {
    
    const {limite = 5,desde = 0} = req.query
    const usuarios =await Usuario.find()
    .skip(Number(desde))
    .limit(Number(limite))
    
    res.json({usuarios})


}

const usuariosPost = async (req,res = response) => {

    const {nombre,correo,password,rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol});
    //verificar si el email existe
    //encriptar contraseña, el parametro que recibe es la complejidad de la encriptacion
    const salt = bcryptjs.genSaltSync(15);
    //la encriptacion pide 2 parametros, la contraseña y el salt
    usuario.password = bcryptjs.hashSync(password,salt)
    
    //guardar en bd
    await usuario.save()
    res.json({
        msg:'Post API Controller',
        usuario
    });
}


const usuariosPut = async(req,res = response) => {
    //los parametros de las rutas se acceden con req.params
    const {id} = req.params;
    const {_id,password,google,correo,...resto} = req.body;
    
    if (password){
       //encriptar contraseña, el parametro que recibe es la complejidad de la encriptacion
       const salt = bcryptjs.genSaltSync(15);
       //la encriptacion pide 2 parametros, la contraseña y el salt
       resto.password = bcryptjs.hashSync(password,salt)          
    }
    const usuario = await usuario.findByIdAndUpdate(id,resto)
    res.json(usuario)
}

const usuariosDelete = async(req,res = response) => {
    const {id} = req.params

    const usuario = await Usuario.findByIdAndDelete(id);
    res.json({
        id
    })
}
 

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}