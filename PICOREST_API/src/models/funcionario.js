const restful = require('node-restful')
const mongoose = restful.mongoose
const mongoosePaginate = require('mongoose-paginate')

const funcionarioSchema = new mongoose.Schema({
    matricula: {
        type: String,
        unique: true,
        require: true
    },
    dataAdmissao: {
        type: Date,
        require: true
    }, 
    ctps: {
        type: String,
        require: true
    },
    rg: {
        type: String,
        require: true
    },
    cnh: {
        type: String
    },
    endereco: {
        numero: {
            type: String,
            require: true
        },
        rua: {
            type: String,
            require: true
        }, 
        bairro: {
            type: String,
            require: true
        },
        cep: {
            type: String,
            require: true
        },
        cidade: {
            type: String,
            require: true
        }, 
        uf: {
            type: String,
            require: true 
        },
        email: {
            type: String,
            require: true
        },
    
    },
    cursos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'curso'
    }],
    setor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'setor'
    },
    funcao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'funcao'
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario'
    },
    createAt: {
        type: Date,
        default: Date.now
    }   
})

funcionarioSchema.plugin(mongoosePaginate)
module.exports = restful.model('funcionario', funcionarioSchema)