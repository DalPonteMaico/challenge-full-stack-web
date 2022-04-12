const express = require('express');
const studentsController = require('./controllers/StudentsController');

const router = express.Router();

router.get('/students', studentsController.listStudents);

router.get('/students/:id', studentsController.getStudent);

router.post('/students', studentsController.createStudent);

router.put('/students/:id', studentsController.updateStudent);

router.delete('/students/:id', studentsController.deleteStudent);


router.get('/', (req, res) => {
  res.json({
    status: 'nominal'
  })
})

module.exports = router;
