import { BaseSeeder } from '@adonisjs/lucid/seeders'
import FormaPagamento from '../../app/models/forma_pagamento.js'
export default class extends BaseSeeder {
  async run() {
    return await FormaPagamento.createMany([
      {id: 1, nome: 'Pix'},
      {id: 2, nome: 'Cretido'},
      {id: 3, nome: 'Depito'}
    ])
  }
}