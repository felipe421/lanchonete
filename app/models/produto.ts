import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany} from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Tipo from './tipo.js'
import Ingrediente from './ingrediente.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Comanda from './comanda.js'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: String

  @column()
  declare preco: Number

  @column()
  declare tamanho: String

  @column()
  declare tipoId: Number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Tipo)
  declare tipo: BelongsTo<typeof Tipo>

  @manyToMany(()=>Ingrediente, {
    'pivotTable': 'produto_ingredientes'
  })
  declare ingrediente: ManyToMany<typeof Ingrediente>

  @manyToMany(()=>Comanda, {
    'pivotTable': 'produto_comandas'
  })
  declare comanda: ManyToMany<typeof Comanda>
}