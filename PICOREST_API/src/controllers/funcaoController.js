const mongoose = require('mongoose')
const funcao = mongoose.model('funcao')

module.exports = {
    async read(req, res) {
        const { page = 1 } = req.query //desestruturação E6
        const funcoes = await funcao.paginate({}, { page, limit: 30} ) 

        return res.json(funcoes)
    },
    
    async show(req, res) {
        const funcao = await funcao.findById(req.params.id)

        return res.json(funcao)
    },

    async create(req, res) {
        const funcao = await funcao.create(req.body)

        return res.json(funcao)
    },

    async update(req, res) {
        const funcao = await funcao.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(funcao)
    },

    async delete(req, res) {
        await funcao.findByIdAndRemove(req.params.id)

        return res.send("foi-se!")
    }
}