const express = require('express')
const server = express()
server.use(express.json())

const Router = require('./Router/router')
server.use('/', Router)

const port = 8888
server.listen(port, () => {
    console.log("Servidor online na porta ", port)
})