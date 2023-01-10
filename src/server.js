import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John',
      email: 'jhon@gmail.com'
    })
    
    return res.writeHead(201).end('Criação de usuários')
  }

  return res.writeHead(404).end()
})

server.listen(3333)