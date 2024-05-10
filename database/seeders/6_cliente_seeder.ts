import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'
export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
      {nome: 'Roberto', cpf: '123.132.123-09', telefone:'619767-1234', email: 'oi@.com'},
      {nome: 'Felipe', cpf: '123.132.123-09', telefone:'619767-1234', email: 'oi@.com'},
      {nome: 'Ricardo', cpf: '123.132.123-09', telefone:'619767-1234', email: 'oi@.com'}
    ])
  }
}