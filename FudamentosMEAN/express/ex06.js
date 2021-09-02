const express1 = require('express')
const express2 = require('express');
//É a mesma refência
console.log(express1 === express2);


const server1 = express1()
const server2 = express1()
//A instância do express nunca é a mesma
console.log(server1 === server2);

//A instância também nunca é a mesma
const router1 = express1.Router()
const router2 = express1.Router()
console.log(router1 === router2)

//o conceito de singleton de modulos do node não acontece. Não há uma única instância