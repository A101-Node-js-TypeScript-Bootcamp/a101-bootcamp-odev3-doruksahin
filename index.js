// in this way, we can use our ENVIRONMENT_VARIABLES in .env file with process.env
require("dotenv").config();

// Swagger is used for creating api document programatically.
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const express = require('express')
const apiRouter = require("./routes/api-route")
const connection = require("./db");
var cors = require('cors')
const { logErrorMiddleware } = require('./errors');

const server = express()
connection();

server.use(cors({ credentials: true, origin: true }))
server.use(express.json())
server.use("/api", apiRouter)
server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
// logErrorMiddleware is a middleware, which works when route function goes to catch.
server.use(logErrorMiddleware)

server.listen(5000, () => {
    console.log("https://localhost:5000 is listening.")
})