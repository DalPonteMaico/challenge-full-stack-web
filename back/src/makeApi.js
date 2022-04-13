const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const StudentsController = require('./controllers/StudentsController')

function makeApi(config) {
  const studentsController = new StudentsController()

  const api = express()
  // @TODO: Remove cors package, instead, configure docker proxy
  api.use(cors())
  api.use(bodyParser.urlencoded({extended: true}))
  api.use(bodyParser.json())
  const router = express.Router()

  router.get('/students', studentsController.listStudents)

  router.get('/students/:id', studentsController.getStudent)

  router.post('/students', studentsController.createStudent)

  router.put('/students/:id', studentsController.updateStudent)

  router.delete('/students/:id', studentsController.deleteStudent)


  api.use('/', router)

  return api
}

module.exports = makeApi
