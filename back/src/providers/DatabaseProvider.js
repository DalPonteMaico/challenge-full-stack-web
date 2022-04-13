const pgp = require('pg-promise')({schema: 'public'})

class DatabaseProvider {
  constructor(config) {
    this.database = config.DATABASE_NAME
    this.user = config.DATABASE_USER
    this.password = config.DATABASE_PASSWORD
    this.host = config.DATABASE_HOST
    this.port = config.DATABASE_PORT
  }

  async getConnection() {
    return pgp({
      database: this.database,
      user: this.user,
      password: this.password,
      host: this.host,
      port: this.port,
    })
  }

  async migrate(database) {
    try {
      await database.query(`create table if not exists students
                            (
                                id             serial primary key,
                                name           text        not null,
                                email          text        not null,
                                registration   text unique not null,
                                socialIdNumber text        not null,
                                updatedAt      timestamp,
                                createdAt      timestamp default now()
                            );`)
    } catch (e) {
      console.error('FAIL TO MIGRATE', e)
      throw e
    }
  }


  async seed(database) {
    try {
      await database.query(`insert into students
                                (name, email, registration, socialIdNumber)
                            values ('Maico Dal Ponte', 'maico.dalponte@codengage.com', '01209159', '00000019100')
                            on conflict (registration) do nothing;`)
    } catch (e) {
      console.error('FAIL TO MIGRATE', e)
      throw e
    }
  }
}

module.exports = DatabaseProvider
