import express from 'express'

const app =  express()
const port = 3000

app.post('/car/reading', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})