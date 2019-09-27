const restful = require('node-restful')
const mongoose = restful.mongoose
const mongoosePaginate = require('mongoose-paginate')

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        unique: true,
        require: true
    },
    senha: {
        type: String,
        require: true
    },
    jj: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'funcionario'
    }],
    createAt: {
        type: Date,
        default: Date.now
    }
})

usuarioSchema.plugin(mongoosePaginate)
module.exports = restful.model('usuario', usuarioSchema)


//https://pt.stackoverflow.com/questions/249830/rela%C3%A7%C3%A3o-entre-documentos-mongodb
//https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd