import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'

export default class Estadio extends BaseModel {
  @column({ isPrimary: true })
  declare codestadios: number

  @column()
  declare estadio: string

  @column()
  declare direccion: string
  @column({columnName:'codPostal'})
  declare codPostal: string
  @column()
  declare poblacion: string
  @column()
  declare provincia: string
  @column()
  declare capacidad: number
  @column()
  declare sentados: number
  @column()
  declare inaguracion: Date
  @column()
  declare dimensiones: number
   @column()
  declare codclub: number


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
//relacion hasmany
@hasMany (()=>Estadio)
declare estadios:HasMany <typeof Estadio>
}