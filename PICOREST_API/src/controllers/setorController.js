const mongoose = require('mongoose')
const setor = mongoose.model('setor')

module.exports = {
    async read(req, res) {
        const { page = 1 } = req.query //desestruturação E6
        const setores = await setor.paginate({}, { page, limit: 30} ) 

        return res.json(setores)
    },
    
    async show(req, res) {
        const setor = await setor.findById(req.params.id)

        return res.json(setor)
    },

    async create(req, res) {
        const setor = await setor.create(req.body)

        return res.json(setor)
    },

    async update(req, res) {
        const setor = await setor.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(setor)
    },

    async delete(req, res) {
        await setor.findByIdAndRemove(req.params.id)

        return res.send("foi-se!")
    }
}