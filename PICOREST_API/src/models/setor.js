const restful = require('node-restful')
const mongoose = restful.mongoose
const mongoosePaginate = require('mongoose-paginate')

const setorSchema = new mongoose.Schema({
    descricao: { 
        type: String, 
        required: true 
    }, 
    createAt: {
        type: Date,
        default: Date.now
    }
})

setorSchema.plugin(mongoosePaginate)
module.exports = restful.model('setor', setorSchema)