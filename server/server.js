const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3010
const dbUrl = process.env.DB_URL

app.use(cors())
app.use(express.json())

console.log(dbUrl)

mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true })
const connection = mongoose.connection

connection.once('open', () => {
    console.log('DB Connection Established.')
})

const usersRouter = require('./routes/users')
const teamsRouter = require('./routes/teams')

app.use('/users', usersRouter)
app.use('/teams', teamsRouter)

app.listen(port, async () => {
    console.log(`Server is running on port: ${port}...`)
    // let client = await new MongoClient(dbUrl, { useUnifiedTopology: true }).connect()
    // const db = client.db();

    // const teams = await db.collection('teams').find().toArray()

    // console.log(teams)
})
