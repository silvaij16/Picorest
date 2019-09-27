const express = require("express")
const funcaoRoute = express.Router()

const funcaoController = require('../controllers/funcaoController')

funcaoRoute.get("/funcaos", funcaoController.read)
funcaoRoute.get("/funcaos/:id", funcaoController.show)
funcaoRoute.post("/funcaos", funcaoController.create)
funcaoRoute.put("/funcaos/:id", funcaoController.update)
funcaoRoute.delete("/funcaos/:id", funcaoController.delete)

module.exports = funcaoRoute