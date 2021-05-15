const express = require('express')
const cors = require('cors')



class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.middleware()
        this.routes()
    }

    middleware(){
        
        //cors
        this.app.use(cors())

        this.app.use(express.json())
        //directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use('/api/usuarios',require('../routes/user'))
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("proceso corriendo en el puerto ",this.port)
        })
    }

}
module.exports =Server;