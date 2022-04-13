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
  constructor(studentsService) {
    this.studentsService = studentsService
  }

  async listStudents(request, response) {
    console.log(this.studentsService)

    const students = await this.studentsService.findAll()

    console.log(students)

    response.status(200).json({
      students
    })
  }

  async getStudent(request, response) {
    const {id} = request.params
    console.log(id)

    response.status(200).json({
      student: mockStudent
    })
  }

  async createStudent(request, response) {
    const {student} = request.body

    response.status(201).json({
      student: {
        id: '2',
        ...student,
        createdAt: new Date(),
      }
    })
  }

  async updateStudent(request, response) {
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

  async deleteStudent(request, response) {
    const {id} = request.params
    console.log(id)

    response.status(201).json({
      student: mockStudent
    })
  }

}

module.exports = StudentsController
