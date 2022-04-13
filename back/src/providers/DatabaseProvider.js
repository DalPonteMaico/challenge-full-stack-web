const pgp = require('pg-promise')

class DatabaseProvider {
  constructor(config) {
    this.database = config.DATABASE_NAME
      this.user = config.DATABASE_USER
      this.password = config.DATABASE_PASSWORD
      this.host = config.DATABASE_HOST
      this.port = config.DATABASE_PORT
  }

  getDatabaseConnection() {
    return pgp({
      database: this.database,
      user: this.user,
      password: this.password,
      host: this.host,
      port: this.port,
    })
  }
}

module.exports = DatabaseProvider
