const express = require('express')
//const mongoose = require('mongoose')
const porta = 3000


const app = express()

app.get('/', (req, res) => {
    res.send ("Hello!!!fhfshfgh")
})

app.listen(porta)