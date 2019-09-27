const express = require("express")
const usuarioRoute = express.Router()

const usuarioController = require('../controllers/usuarioController')

usuarioRoute.get("/usuarios", usuarioController.read)
usuarioRoute.get("/usuarios/:id", usuarioController.show)
usuarioRoute.post("/usuarios", usuarioController.create)
usuarioRoute.put("/usuarios/:id", usuarioController.update)
usuarioRoute.delete("/usuarios/:id", usuarioController.delete)

module.exports = usuarioRoute
