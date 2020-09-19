'use strict'

const app = require('./app')
const GlobalEnv = require('./GlobalEnv')
const http = require('http').createServer(app);
const socketIO = require('socket.io')

const server = app.listen(GlobalEnv.port, () => {
    console.log(`Servidor web escuchando en ${GlobalEnv.host}:${GlobalEnv.port}`)
})
const io = socketIO(server)
const sockets = require('./sockets')(io)