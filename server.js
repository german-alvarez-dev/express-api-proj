const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.use("/", require('./routes/products.routes'))

app.listen("5005", () => console.log("Server started at: http://localhost:5005"))