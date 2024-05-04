import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Comanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare mesa: String

  @column()
  declare fucionarioid: Number

  @column()
  declare clienteid: Number

  @column()
  declare formaPagamentoid: Number

  @column()
  declare data_pagamento: DateTime

  @column()
  declare data: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}