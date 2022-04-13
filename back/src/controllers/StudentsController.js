class StudentsController {
  constructor(studentsService) {
    this.studentsService = studentsService
  }

  async listStudents(request, response) {
    const students = await this.studentsService.findAll()

    response.status(200).json({
      students
    })
  }

  async getStudent(request, response) {
    const {id} = request.params
    const [student] = await this.studentsService.findById(id)

    response.status(200).json({
      student: student
    })
  }

  async createStudent(request, response) {
    const {student} = request.body

    const result = await this.studentsService.create(student)

    response.status(201).json({
      student,
      result,
    })
  }

  async updateStudent(request, response) {
    const {id} = request.params
    const {student: {name, email}} = request.body

    const [current] = await this.studentsService.findById(id)
    const result = await this.studentsService.update({...current, name, email})

    response.status(201).json({
      result,
      student: current
    })
  }

  async deleteStudent(request, response) {
    const {id} = request.params
    const result = await this.studentsService.delete({id})

    response.status(201).json({result})
  }

}

module.exports = StudentsController
