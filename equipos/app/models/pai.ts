import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, type HasMany } from '@adonisjs/lucid/orm'
import Jugador from './jugador.js'


export default class Pai extends BaseModel {
  @column({ isPrimary: true })
  declare codpais: number

  @column()
  declare nombrepais: string

  @column()
  declare comunitario: string
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Jugador,{
    foreignKey:"codpais"
})
  declare jugadors:HasMany<typeof Jugador>
}
