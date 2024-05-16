import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cargo from './cargo.js'
import Comanda from './comanda.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: String
 
  @column()
  declare cpf: String

  @column()
  declare endereco: String

  @column()
  declare sexo: String

  @column()
  declare telefone: String

  @column()
  declare cargoId: Number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Cargo)
  declare cargo: BelongsTo<typeof Cargo> 

  @hasMany(()=> Comanda)
  declare comanda: HasMany<typeof Comanda> 
}