const restful = require('node-restful')
const mongoose = restful.mongoose
const mongoosePaginate = require('mongoose-paginate')

const funcaoSchema = new mongoose.Schema({
    descricao: { 
        type: String, 
        required: true 
    },
    cursos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'curso'
    }],
    createAt: {
        type: Date,
        default: Date.now
    }  
})

funcaoSchema.plugin(mongoosePaginate)
module.exports = restful.model('funcao', funcaoSchema)