//similar a las rutas de Laravel
const {Router} = require('express')

const {usuariosGet,
    usuariosPost,
    usuariosPut} = require('../controllers/usuario')

const router = Router()
//En las rutas se pone el metodo, la ruta a donde apunta y el metodo a ejecutar del controlador
router.get('/',usuariosGet)

//con : definimos parametros en las rutas
router.put('/:id',usuariosPut)

router.post('/',usuariosPost)

module.exports = router