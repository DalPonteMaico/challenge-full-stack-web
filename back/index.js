const config = require('./config')
const makeApi = require('./src/makeApi')

const {PORT} = config

api = makeApi(config)

api.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
