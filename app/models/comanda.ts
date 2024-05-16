import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Funcionario from './funcionario.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cliente from './cliente.js'
import FormaPagamento from './forma_pagamento.js'

export default class Comanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare mesa: String

  @column()
  declare funcionarioId: Number

  @column()
  declare clienteId: Number

  @column()
  declare formaPagamentoId: Number

  @column()
  declare data_pagamento: DateTime

  @column()
  declare data: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Funcionario)
  declare funcionario: BelongsTo<typeof Funcionario> // N

  @belongsTo(()=> Cliente)
  declare cliente: BelongsTo<typeof Cliente> // N

  @belongsTo(()=> FormaPagamento)
  declare formaPagamento: BelongsTo<typeof FormaPagamento> // N
}