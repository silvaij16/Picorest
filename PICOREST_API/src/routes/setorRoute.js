const express = require("express")
const setorRoute = express.Router()

const setorController = require('../controllers/setorController')

setorRoute.get("/setors", setorController.read)
setorRoute.get("/setors/:id", setorController.show)
setorRoute.post("/setors", setorController.create)
setorRoute.put("/setors/:id", setorController.update)
setorRoute.delete("/setors/:id", setorController.delete)

module.exports = setorRoute