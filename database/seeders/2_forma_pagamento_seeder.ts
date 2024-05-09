import { BaseSeeder } from '@adonisjs/lucid/seeders'
import FormaPagamento from '../../app/models/forma_pagamento.js'
export default class extends BaseSeeder {
  async run() {
    return await FormaPagamento.createMany([
      {nome: 'Pix'},
      {nome: 'Cretido'},
      {nome: 'Depito'}
    ])
  }
}