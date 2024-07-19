const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

//http logger
app.use(morgan('combined'))

//template engine

app.get('/adennn', (req, res) => {
  res.send('Hello World!')
})

//localhost: 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 