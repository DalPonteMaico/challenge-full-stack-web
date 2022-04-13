const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const DatabaseProvider = require('./providers/DatabaseProvider')
const StudentsService = require('./services/StudentsService')
const StudentsController = require('./controllers/StudentsController')

async function makeApi(config) {
  try {
    const databaseProvider = new DatabaseProvider(config)

    // @TODO Move database connection, migration and seed to a command
    const database = await databaseProvider.getConnection()
    await databaseProvider.migrate(database)
    await databaseProvider.seed(database)

    // @TODO Proper dependency injection package
    const studentsService = new StudentsService(database)
    const studentsController = new StudentsController(studentsService)

    const api = express()

    // @TODO Remove cors package, configure docker proxy on the client side instead
    api.use(cors())

    api.use(bodyParser.urlencoded({extended: true}))
    api.use(bodyParser.json())
    const router = express.Router()

    // @TODO Setup routes using other methods, lazy loading maybe...
    router.get('/students', (request, response, next) =>
      studentsController.listStudents(request, response))

    router.get('/students/:id', studentsController.getStudent)

    router.post('/students', studentsController.createStudent)

    router.put('/students/:id', studentsController.updateStudent)

    router.delete('/students/:id', studentsController.deleteStudent)

    api.use('/', router)
    return api
  } catch (e) {
    //@TODO proper error handling for dependency injection fail
    console.error(e)
    throw e;
  }
}

module.exports = makeApi
