//similar a las rutas de Laravel
const {Router} = require('express')
const {check} = require('express-validator')
const {validarCampos} = require('../middlewares/validarCampos')
const {validaRol,existeEmail,existeUsuarioPorId} = require('../helpers/bd-validators')
const {usuariosGet,
    usuariosPost,
    usuariosPut} = require('../controllers/usuario')

const router = Router()
//En las rutas se pone el metodo, la ruta a donde apunta y el metodo a ejecutar del controlador
router.get('/',usuariosGet)

//con : definimos parametros en las rutas
router.put('/:id',[
    check('id','No es un id valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
],usuariosPut)

//se estan validando los campos
router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password debe tener mas de 6 caracteres').isLength({min:6}),
    check('correo','El correo no es un correo').isEmail(),
    check('El correo ya existe en la base de datos'),
    check('rol','El rol no es valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    //check('rol').custom((rol)=>validaRol(rol)),
    validarCampos
],usuariosPost)

router.delete('/:id',usuariosDelete)
module.exports = router