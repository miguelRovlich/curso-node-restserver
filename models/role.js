const {Schema,model} = require('mongoose')

const roleSchema = Schema({
    rol:{
        type: String,
        required: [true,"El rol es obligatorio"],
    }
})


exports.default = model('Role',roleSchema)