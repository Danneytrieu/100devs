const express = require('express')
const app = express()

const PORT = 4001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

app.get('/', (req, res) =>
  res.send('<h1>Welcome to the pair programming project</h1>')
)
