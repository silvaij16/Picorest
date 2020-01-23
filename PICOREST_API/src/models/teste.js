const restful = require('node-restful')
const mongoose = restful.mongoose
const mongoosePaginate = require('mongoose-paginate')

const testeSchema = new mongoose.Schema({
    descricao: { 
        type: String, 
        required: true 
    }, 
    createAt: {
        type: Date,
        default: Date.now
    }
})

testeSchema.plugin(mongoosePaginate)
module.exports = restful.model('teste', setorSchema)