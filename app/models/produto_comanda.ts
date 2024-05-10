import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ProdutoComanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare produtoId: Number

  @column()
  declare comandaId: Number

  @column()
  declare quantidade: Number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}