const restful = require('node-restful')
const mongoose = restful.mongoose
const mongoosePaginate = require('mongoose-paginate')

const cursoSchema = new mongoose.Schema({
    descricao: { 
        type: String, 
        required: true 
    }, 
    cargaHoraria: {
        type: String,
        required: true
    },
    certificado: { 
        type: String,
        required: true
    },
    dataInicio: { 
        type: Date, 
        required: true 
    },
    dataConclusao: { 
        type: Date, 
        required: true 
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

cursoSchema.plugin(mongoosePaginate)
module.exports = restful.model('curso', cursoSchema)