import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cargo from '../../app/models/cargo.js'
export default class extends BaseSeeder {
  async run() {
    return await Cargo.createMany([
      {id: 1, nome: 'Gerente'},
      {id: 2, nome: 'Chef de cozinha'},
      {id: 3, nome: 'Atendente'},
      {id: 4, nome: 'Auxiliar de cozinha'},
      {id: 5, nome: 'Atendente de balcão'},
      {id: 6, nome: 'Chapeiro'},
      {id: 7, nome: 'Estoquista'},
      {id: 8, nome: 'Limpeza'}
    ])
  }
}