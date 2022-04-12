const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./router')

const api = express()
const port = 3001
// @TODO: Remove cors package, instead, configure docker proxy
api.use(cors())
api.use(bodyParser.urlencoded({extended: true}))
api.use(bodyParser.json())


api.use('/', router)

api.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
