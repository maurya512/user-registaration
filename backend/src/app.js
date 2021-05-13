const express = require('express')

const app = express()

// require the file
require('./database/connection')

app.get('/', async(req, res) => {
    res.send('hello')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

