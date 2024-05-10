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


