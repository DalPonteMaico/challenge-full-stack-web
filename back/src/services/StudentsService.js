class StudentsService{
  constructor(database) {
    this.database = database
  }

  async findAll() {
    return this.database.query('select * from students')
  }
}

module.exports = StudentsService
