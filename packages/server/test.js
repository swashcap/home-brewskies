const assert = require('assert')
const supertest = require('supertest')

const app = require('./index.js')

supertest(app).get('/')
  .expect(200)
  .then(({ body }) => {
    assert(Array.isArray(body))
    assert(body.every(beer => !!beer.name))
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
