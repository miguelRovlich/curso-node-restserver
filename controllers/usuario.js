//funciona igual que el controlador de laravel, el response es el parametro recibido en el resource

const {response} = require('express')


const usuariosGet = (req,res = response) => {
    res.json({
        msg:'get API Controller'
    })
}

const usuariosPost = (req,res = response) => {
    
    const body = req.body;

    res.json({
        msg:'Post API Controller',
        body
    });
}

const usuariosPut = (req,res = response) => {
    
    //los parametros de las rutas se acceden con req.params
    const id = req.params.id;
    res.json({
        msg:'Put API Controller',
        id
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut
}