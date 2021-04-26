const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const database = require('./database/db')
const userRoute = require('./routes/user.route')
const DVDRoute = require('./routes/DVD.route')
const port = process.env.PORT || 8080
const app = express()


mongoose.Promise = global.Promise
mongoose.connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
        console.log('Database sucessfully connected')
        app.use(cors())
        app.use(bodyParser.json())
        app.use('/api', userRoute)
        app.use('/api', DVDRoute)

        app.listen(port, () => {
            console.log('Server is running on port ' + port)
        })

    },
    error => {
        console.log('Database connection failed: ' + error)
    }
)