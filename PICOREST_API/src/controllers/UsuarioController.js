const mongoose = require('mongoose')
const usuario = mongoose.model('usuario')

module.exports = {
    async read(req, res) {
        const { page = 1 } = req.query //desestruturação E6
        const usuarios = await usuario.paginate({}, { page, limit: 30} ) 

        return res.json(usuarios)
    },
    
    async show(req, res) {
        const usuario = await usuario.findById(req.params.id)

        return res.json(usuario)
    },

    async create(req, res) {
        const usuario = await usuario.create(req.body)

        return res.json(usuario)
    },

    async update(req, res) {
        const usuario = await usuario.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(usuario)
    },

    async delete(req, res) {
        await usuario.findByIdAndRemove(req.params.id)

        return res.send("foi-se!")
    }
}