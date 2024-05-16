import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Produto from './produto.js'

export default class ProdutoIngrediente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare produtoId: Number

  @column()
  declare ingredienteId: Number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


}