import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, type BelongsTo} from '@adonisjs/lucid/orm'


export default class Club extends BaseModel {
  @column({ isPrimary: true })
  declare codclub: number

  @column()
  declare club: string

  @column()
  declare nombre:string

  @column()
  declare direccion:string

  @column()
  declare poblacion:string

  @column()
  declare provincia:string

  @column({columnName:'codPostal'})
  declare codPostal:string

  @column()
  declare telefono:string

  @column()
  declare colores:string

  @column()
  declare himno:string

  @column()
  declare fax:string

  @column({columnName:'anioFundacion'})
  declare anioFundacion:number

  @column()
  declare presupuesto:number

  @column()
  declare presidente:string

  @column()
  declare vicepresidente:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

   @belongsTo(()=>Club)
   declare club:BelongsTo<typeof Club>
}