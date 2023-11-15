// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
// var cors = require("cors");

// app.use(cors())
server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})