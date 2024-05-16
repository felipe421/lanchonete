import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Comanda from './comanda.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: String

  @column()
  declare cpf: String

  @column()
  declare telefone: String

  @column()
  declare email: String

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=> Comanda)
  declare comanda: HasMany<typeof Comanda> 
}