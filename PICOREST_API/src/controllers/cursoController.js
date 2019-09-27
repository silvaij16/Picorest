const mongoose = require('mongoose')
const curso = mongoose.model('curso')

module.exports = {
    async read(req, res) {
        const { page = 1 } = req.query //desestruturação E6
        const cursos = await curso.paginate({}, { page, limit: 30} ) 

        return res.json(cursos)
    },
    
    async show(req, res) {
        const curso = await curso.findById(req.params.id)

        return res.json(curso)
    },

    async create(req, res) {
        const curso = await curso.create(req.body)

        return res.json(curso)
    },

    async update(req, res) {
        const curso = await curso.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(curso)
    },

    async delete(req, res) {
        await curso.findByIdAndRemove(req.params.id)

        return res.send("foi-se!")
    }
}