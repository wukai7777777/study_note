const http = require('http')

const data = {title: 'fontend', password: '123456'}
const server = http.createServer((request, response) => {
  console.log(request.url, '+++++++++++++++++++++++')
  if(request.url === '/') {
    response.end(JSON.stringify(data))
  }
})

server.listen(4000, () => {
  console.log('The server is runing at http://localhost:4000')
})