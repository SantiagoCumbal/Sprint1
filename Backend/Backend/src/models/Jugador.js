import {Schema, model} from 'mongoose'
import bcrypt from "bcryptjs"


const jugadorSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    apellido:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
		unique:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String,
        default:null
    },

    rol:{
        type:String,
        default:"jugador"
    },
    status:{
        type:Boolean,
        default:true
    },
    confirmEmail:{
        type:Boolean,
        default:false
    },

},{
    timestamps:true
})


// Método para cifrar el password del veterinario
jugadorSchema.methods.encrypPassword = async function(password){
    const salt = await bcrypt.genSalt(10)
    const passwordEncryp = await bcrypt.hash(password,salt)
    return passwordEncryp
}

// Método para verificar si el password ingresado es el mismo de la BDD
jugadorSchema.methods.matchPassword = async function(password){
    const response = await bcrypt.compare(password,this.password)
    return response
}

// Método para crear un token 
jugadorSchema.methods.crearToken = function(){
    const tokenGenerado = this.token = Math.random().toString(36).slice(2)
    return tokenGenerado
}


export default model('Jugadores',jugadorSchema)