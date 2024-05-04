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
import ComandasController from '../app/controllers/comandas_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/hello', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/felipe ', ProdutosController).apiOnly()
router.resource('/felipe ', ClientesController).apiOnly()
router.resource('/felipe ', FuncionariosController).apiOnly()
router.resource('/felipe ', FuncionariosController).apiOnly()

