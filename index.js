const express = require('express')
const app = express()
const cors = require('cors')
const Name = require('./models/name')

app.use(express.static('build'))
app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/names', (req, res) => {
  Name.find({})
    .then((names) => {
      res.json(names)
    })
    .catch((error) => next(error))
})

app.get("/names/:name", (request, response, next) => {
    console.log(request.params.name)
    Name.find({ name: request.params.name })
      .then((name) => {
        if (name) {
          response.json(name)
        } else {
          response.status(404).end()
        }
      })
      .catch((error) => next(error))
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
