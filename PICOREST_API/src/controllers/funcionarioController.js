const mongoose = require('mongoose')
const funcionario = mongoose.model('funcionario')

module.exports = {
    async read(req, res) {
        const { page = 1 } = req.query //desestruturação E6
        const funcionarios = await funcionario.paginate({}, { page, limit: 30} ) 

        return res.json(funcionarios)
    },
    
    async show(req, res) {
        const funcionario = await funcionario.findById(req.params.id)

        return res.json(funcionario)
    },

    async create(req, res) {
        const funcionario = await funcionario.create(req.body)

        return res.json(funcionario)
    },

    async update(req, res) {
        const funcionario = await funcionario.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(funcionario)
    },

    async delete(req, res) {
        await funcionario.findByIdAndRemove(req.params.id)

        return res.send("foi-se!")
    }
}