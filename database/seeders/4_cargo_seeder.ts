import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cargo from '../../app/models/cargo.js'
export default class extends BaseSeeder {
  async run() {
    return await Cargo.createMany([
      {nome: 'Gerente'},
      {nome: 'Chef de cozinha'},
      {nome: 'Atendente'},
      {nome: 'Auxiliar de cozinha'},
      {nome: 'Atendente de balcão'},
      {nome: 'Chapeiro'},
      {nome: 'Estoquista'},
      {nome: 'Limpeza'}
    ])
  }
}