const express = require("express")
const funcionarioRoute = express.Router()

const funcionarioController = require('../controllers/funcionarioController')

funcionarioRoute.get("/funcionarios", funcionarioController.read)
funcionarioRoute.get("/funcionarios/:id", funcionarioController.show)
funcionarioRoute.post("/funcionarios", funcionarioController.create)
funcionarioRoute.put("/funcionarios/:id", funcionarioController.update)
funcionarioRoute.delete("/funcionarios/:id", funcionarioController.delete)

module.exports = funcionarioRoute