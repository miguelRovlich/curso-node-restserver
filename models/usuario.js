const {Schema,model} = require('mongoose')

const usuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true,'El nombre es obligatorio']
    },
    correo:{
        type: String,
        required: [true,'El correo es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        required: [true,'La contraseña es obligatoria']
    },
    img:{
        type: String,    
    },
    rol:{
        type: String,
        required: true,
        enum: ['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type: Boolean,
        default:true
    },
    google:{
        type: Boolean,
        default:false
    }
})

usuarioSchema.methods.toJSON = function () {
    const {__v,password,...usuario} = this.toObject()
}



module.exports = model('Usuario',usuarioSchema)