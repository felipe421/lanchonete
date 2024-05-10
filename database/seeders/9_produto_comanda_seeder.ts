import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoComanda from '../../app/models/produto_comanda.js'
export default class extends BaseSeeder {
  async run() {
    await ProdutoComanda.createMany([
      {produtoId: 1,  comandaId: 1, quantidade:2},
      {produtoId: 2,  comandaId: 1, quantidade:1},
      {produtoId: 16,  comandaId: 1, quantidade:1},
      {produtoId: 9,  comandaId: 1, quantidade:1},
      {produtoId: 7,  comandaId: 2, quantidade:1},
      {produtoId: 12,  comandaId: 2, quantidade:3},
      {produtoId: 19,  comandaId: 3, quantidade:2},
      {produtoId: 4,  comandaId: 3, quantidade:1},
      {produtoId: 11,  comandaId: 3, quantidade:3},
    ])
  }
}