const config = require('./config')
const makeApi = require('./src/makeApi')

const {PORT} = config
const serverPort = process.env.PORT || PORT;

console.log(`Starting server on port ${serverPort}...`)
makeApi(config).then((api) =>
  api.listen(serverPort, () => {
    console.log(`Server running on port: ${serverPort}`)
  })
)
