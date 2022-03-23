const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.use("/", require('./routes/products.routes'))

const PORT = process.env.PORT || 5005
app.listen(PORT, () => console.log("Server started at: http://localhost:5005"))