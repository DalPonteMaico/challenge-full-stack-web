const mockStudent = {
  id: '1',
  name: 'Maico Dal Ponte',
  email: 'maico.dalponte@codengage.com',
  registration: '01209159',
  socialIdNumber: '00000000191',
  updatedAt: null,
  createdAt: new Date(),
}

class StudentsController {
  constructor() {
  }

  listStudents(request, response, next) {
    const students = [mockStudent]

    response.status(200).json({
      students
    })
  }

  getStudent(request, response, next) {
    const {id} = request.params
    console.log(id)

    response.status(200).json({
      student: mockStudent
    })
  }

  createStudent(request, response, next) {
    const {student} = request.body

    response.status(201).json({
      student: {
        id: '2',
        ...student,
        createdAt: new Date(),
      }
    })
  }

  updateStudent(request, response, next) {
    const {id} = request.params
    console.log(id)
    const {student} = request.body

    response.status(201).json({
      student: {
        ...student,
        updatedAt: new Date(),
      }
    })
  }

  deleteStudent(request, response, next) {
    const {id} = request.params
    console.log(id)

    response.status(201).json({
      student: mockStudent
    })
  }

}

module.exports = StudentsController
