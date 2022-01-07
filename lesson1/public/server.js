const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url)
  const body = req.url === '/styles.css'
    ? fs.readFileSync('./styles.css')
    : fs.readFileSync('./index.html')
  res.end(body)
})


const port = process.env.PORT || 3000
server.listen(port)

console.log(`Server started on port ${port}!`)
