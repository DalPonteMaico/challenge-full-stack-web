// @TODO inject a repository to students resource instead database directly
class StudentsService {
  constructor(database) {
    this.database = database
  }

  async findAll() {
    return this.database.query(`select *
                                from students`)
  }

  async findById(id) {
    return this.database.query(`select * from students where id = '${id}'`)
  }

  async create(student) {
    const {
      name,
      email,
      registration,
      socialIdNumber,
    } = student
    return this.database.query(`insert into students (name, email, registration, socialIdNumber)
                                  values ('${name}','${email}','${registration}','${socialIdNumber}')`)
  }

  async update(student) {
    const {id, name, email} = student
    return this.database.query(`update students
                                set name  = '${name}',
                                    email = '${email}',
                                    updatedAt = now()
                                where id = '${id}';`)
  }

  async delete(student) {
    const {id} = student
    return this.database.query(`delete from students where id = '${id}';`)
  }
}

module.exports = StudentsService
