const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const yaml = require('js-yaml')

const app = express()
const PORT = process.env.PORT || 4000

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'))
}

app.get('/', (req, res) => {
  fs.readFile(
    path.join(__dirname, 'fixtures/beers.yml'),
    'utf-8',
    (error, contents) => {
      if (error) {
        console.error(error)
        res.sendStatus(500)
      } else {
        try {
          res.send(yaml.safeLoad(contents))
        } catch (err) {
          console.error(error)
          res.sendStatus(500)
        }
      }
    }
  )
})

if (require.main === module) {
  app.listen(PORT, (error) => {
    if (error) {
      throw error
    } else {
      console.log(`Server listening at http://localhost:${PORT}`)
    }
  })
}

module.exports = app
