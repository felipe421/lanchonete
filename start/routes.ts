/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ProdutosController from '../app/controllers/produtos_controller.js'
import ClientesController from '../app/controllers/clientes_controller.js'
import FuncionariosController from '../app/controllers/funcionarios_controller.js'
import TiposController from '../app/controllers/tipos_controller.js'
import ProdutoComandasController from '../app/controllers/produto_comandas_controller.js'
import FormaPagamentosController from '../app/controllers/forma_pagamentos_controller.js'
import ComandasController from '../app/controllers/comandas_controller.js'


router.get('/', async () => {
  return {
    hello: '123',
  }
})

router.get('/hello', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/produto', ProdutosController).apiOnly()
router.resource('/cliente', ClientesController).apiOnly()
router.resource('/funcionario', FuncionariosController).apiOnly()
router.resource('/tipo', TiposController).apiOnly()
router.resource('/produtoComanda', ProdutoComandasController).apiOnly()
router.resource('/formaPagamento', FormaPagamentosController).apiOnly()
router.resource('/comanda', ComandasController).apiOnly()


