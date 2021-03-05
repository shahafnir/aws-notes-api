const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const noteRouter = require('./routers/note')

const app = express()

app.use(express.json())
app.use(cors())
app.use(noteRouter)

const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})
