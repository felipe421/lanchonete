import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comanda from '../../app/models/comanda.js'
export default class extends BaseSeeder {
  async run() {
    await Comanda.createMany([
      {mesa: 'mesa1', funcionarioId: 1, clienteId: 1, formaPagamentoId: 1},
      {mesa: 'mesa2', funcionarioId: 2, clienteId: 2, formaPagamentoId: 2},
      {mesa: 'mesa3', funcionarioId: 3, clienteId: 3, formaPagamentoId: 3}
    ])
    
  }
}