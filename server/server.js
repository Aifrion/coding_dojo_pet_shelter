require('./config/mongoose.config')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }))

const AllMyUserRoutes = require('./routes/pet.routes')
AllMyUserRoutes(app)

app.listen(8001, () => console.log('The server is all fired up on port 8001'))