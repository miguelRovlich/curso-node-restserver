const mongoose = require('mongoose')




const dbConnection = async() =>{
    try {
       await mongoose.connect(process.env.MONGODB_CNN,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }); 
        console.log("Base de datos conectada exitosamente")
    } catch (error) {
        throw new Error("error en la conexion a la base de datos");
    }
}


module.exports = {
    dbConnection
}