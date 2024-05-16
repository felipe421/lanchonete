import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Produto from './produto.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Ingrediente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: String

  @column()
  declare descricao: String

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(()=>Produto, {
    'pivotTable': 'produto_ingredientes'
  })
  declare produto: ManyToMany<typeof Produto>
}