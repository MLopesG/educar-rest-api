'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TrabalhosSchema extends Schema {
  up () {
    this.create('trabalhos', (table) => {
      table.increments('id').primary()
      table.string('titulo', 20)
      table.string('palavras_chaves', 20)
      table.string('texto')
      table.timestamps()
    })
  }

  down () {
    this.drop('trabalhos')
  }
}

module.exports = TrabalhosSchema
