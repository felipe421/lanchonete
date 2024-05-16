import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Produto from './produto.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Comanda from './comanda.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

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