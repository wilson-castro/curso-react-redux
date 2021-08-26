const _ = require('lodash')

const alunos = [{
  nome: 'João',
  nota: 7.6
}, {
  nome: 'Maria',
  nota: 9
}, {
  nome: 'Pedro',
  nota: 6
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media);