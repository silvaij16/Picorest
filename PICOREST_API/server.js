const express = require("express")
const mongoose = require('mongoose')
const requireDir = require('require-dir')
bodyParser = require('body-parser')

const porta = 3046


//ininciando o app
const app = express()
app.use(express.json())

//conecção com o db
mongoose.connect(
    'mongodb://localhost:27017/dbpicorest', 
    { useNewUrlParser: true }
)
requireDir("./src/models")//mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//rotas
app.use("/api", require("./src/routes/usuarioRoute"))
app.use("/api", require("./src/routes/funcionarioRoute"))
app.use("/api", require("./src/routes/setorRoute"))
app.use("/api", require("./src/routes/funcaoRoute"))
app.use("/api", require("./src/routes/cursoRoute"))
//app.use("/PICOREST_API", require("./src/routes/usuarioRoute"))

app.listen(porta)


//C:\Program Files\MongoDB\Server\4.2\bin>mongod --dbpath C:\Users\fr041710\Desktop\data