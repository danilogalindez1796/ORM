import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estadios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('codestadios')
      table.string('estadio').notNullable()
      table.string('direccion').notNullable()
      table.string('codPostal')
      table.string('poblacion')
      table.string('provincia').notNullable()
      table.integer('capacidad').notNullable()
      table.integer('sentados')
      table.date('inaguracion')
      table.string('dimensiones')
      table.integer('codclub').notNullable().references('codclub').inTable('clubs').onDelete('CASCADE').onUpdate('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}