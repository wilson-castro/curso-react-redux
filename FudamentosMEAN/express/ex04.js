const express = require('express')
const server = express()

server.route('/clientes')
  .get((req, res) => res.send('Lista de clientes'))
  .post((req, res) => res.send('Novo cliente'))
  .put((req, res) => res.send('Alterar cliente  '))
  .delete((req, res) => res.send('Remover cliente'))

server.listen(3000, () => console.log('Executando...'))