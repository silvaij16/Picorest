const express = require("express")
const cursoRoute = express.Router()

const cursoController = require('../controllers/cursoController')

cursoRoute.get("/cursos", cursoController.read)
cursoRoute.get("/cursos/:id", cursoController.show)
cursoRoute.post("/cursos", cursoController.create)
cursoRoute.put("/cursos/:id", cursoController.update)
cursoRoute.delete("/cursos/:id", cursoController.delete)

module.exports = cursoRoute